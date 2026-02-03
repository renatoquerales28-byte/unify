import Papa from 'papaparse';

// Helper function to read a file
const fetchCsv = async (fileName) => {
    try {
        const response = await fetch(`/data/${fileName}.csv`);
        if (!response.ok) {
            console.warn(`Failed to fetch CSV: ${fileName}`, response.status);
            return null;
        }
        const text = await response.text();
        return text;
    } catch (e) {
        console.error("Error loading CSV:", e);
        return null;
    }
};

export const loadRealData = async () => {
    // 1. Load Products (dim_products2)
    // Structure: item_code, product_description, current_unit_cost, current_unit_price
    const productsCsv = await fetchCsv('dim_products2');

    // 2. Load Sales (fct_sales)
    // Structure: date_id, item_code, quantity_sold, sale_unit_price, line_profit_margin
    const salesCsv = await fetchCsv('fct_sales');

    if (!productsCsv || !salesCsv) return null;

    const products = Papa.parse(productsCsv, { header: true, delimiter: ',', skipEmptyLines: true }).data;
    const sales = Papa.parse(salesCsv, { header: true, delimiter: ',', skipEmptyLines: true }).data;

    console.log("Parsed Products:", products.length);
    console.log("Parsed Sales:", sales.length);

    // --- DATA TRANSFORMATION ---

    // 1. Calculate Inventory Status
    let processedInventory = products.map(p => {
        if (!p.item_code) return null;

        const cost = parseFloat(p.current_unit_cost) || 0;
        const price = parseFloat(p.current_unit_price) || 0;
        // Avoid division by zero
        const margin = price > 0 ? ((price - cost) / price) * 100 : 0;

        let status = 'STABLE';
        if (margin > 60) status = 'HIGH_PERFORMER';
        // Relaxed threshold for demo: < 30% is inefficient
        if (margin < 30) status = 'INEFFICIENT';

        return {
            id: p.item_code,
            name: p.product_description || 'Unknown Product',
            category: 'General',
            margin: margin.toFixed(1),
            rotation: Math.floor(Math.random() * 100), // Placeholder
            stock: Math.floor(Math.random() * 500),   // Placeholder
            daysInStock: Math.floor(Math.random() * 200), // Placeholder
            status: status
        };
    }).filter(i => i !== null);


    // 2. Calculate Waterfall Data (Financials) from Sales
    let totalRevenue = 0;
    let totalProfit = 0;

    sales.forEach(s => {
        const amount = parseFloat(s.total_line_amount) || 0;
        const profit = parseFloat(s.total_line_benefit) || 0;
        totalRevenue += amount;
        totalProfit += profit;
    });

    const financialBreakdown = [
        { label: 'Ingresos Totales', value: totalRevenue, type: 'total', color: 'bg-emerald-500' },
        { label: 'Costo Mercancía', value: -(totalRevenue - totalProfit), type: 'loss', color: 'bg-slate-400' },
        { label: 'Ganancia Neta', value: totalProfit, type: 'net', color: 'bg-blue-600' }
    ];

    // 3. Generate Prescriptions (Insights)
    const prescriptions = processedInventory
        .filter(i => i.status === 'INEFFICIENT')
        .slice(0, 3) // Top 3 worst
        .map(item => ({
            id: item.id,
            priority: 'critical',
            title: `Liquidation::${item.name.substring(0, 20)}...`, // Truncate name
            desc: `Low margin (${item.margin}%) detected. Immediate action required.`,
            impact: 'RECOVER CAPITAL'
        }));

    // Add a positive one if possible
    const topPerformer = processedInventory.find(i => i.status === 'HIGH_PERFORMER');
    if (topPerformer) {
        prescriptions.push({
            id: topPerformer.id,
            priority: 'opportunity',
            title: `Restock::${topPerformer.name.substring(0, 15)}...`,
            desc: `High margin (${topPerformer.margin}%). Demand stable.`,
            impact: 'MAXIMIZE PROFIT'
        });
    }

    console.log("Real Data Loaded:", { inventory: processedInventory.length, prescriptions });

    return {
        inventory: processedInventory,
        financialBreakdown: financialBreakdown,
        // Using mock heatmap for now or calculating from sales dates
        salesHeatmap: [],
        prescriptions: prescriptions
    };
};

