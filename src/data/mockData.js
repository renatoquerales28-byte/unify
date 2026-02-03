export const MOCK_DATA = {
    // 1. Inventario para la Matriz y Análisis Drill-down
    inventory: [
        { id: 'SKU-A1', name: 'Botas Cuero Premium', category: 'Calzado', margin: 85, rotation: 80, stock: 150, daysInStock: 12, status: 'HIGH_PERFORMER' },
        { id: 'SKU-A2', name: 'Zapatillas Urban X', category: 'Calzado', margin: 70, rotation: 75, stock: 200, daysInStock: 8, status: 'HIGH_PERFORMER' },
        { id: 'SKU-P1', name: 'Sandalias Verano 23', category: 'Calzado', margin: 20, rotation: 15, stock: 450, daysInStock: 140, status: 'INEFFICIENT' },
        { id: 'SKU-P2', name: 'Cinturón Clásico', category: 'Accesorios', margin: 30, rotation: 10, stock: 80, daysInStock: 180, status: 'INEFFICIENT' },
        { id: 'SKU-N1', name: 'Calcetines Pack 3', category: 'Accesorios', margin: 50, rotation: 50, stock: 300, daysInStock: 30, status: 'STABLE' },
    ],

    // 2. Desglose Financiero (Waterfall Chart Data)
    financialBreakdown: [
        { label: 'Ganancia Potencial Ideal', value: 12500, type: 'total', color: 'bg-emerald-500' },
        { label: 'Costo Almacenamiento', value: -1800, type: 'loss', color: 'bg-slate-400' },
        { label: 'Obsolescencia Técnica', value: -2400, type: 'loss', color: 'bg-amber-500' },
        { label: 'Ventas Perdidas (Stockout)', value: -3200, type: 'loss', color: 'bg-red-500' },
        { label: 'Ganancia Real Actual', value: 5100, type: 'net', color: 'bg-blue-600' }
    ],

    // 3. Heatmap de Ventas (Último Mes) - Intensidad 0-100
    salesHeatmap: [
        { day: 'Lun', hours: [10, 20, 15, 40, 60, 80, 50, 20] },
        { day: 'Mar', hours: [15, 25, 20, 45, 65, 85, 55, 25] },
        { day: 'Mié', hours: [12, 22, 18, 50, 70, 90, 60, 30] }, // Pico semanal
        { day: 'Jue', hours: [5, 10, 8, 20, 30, 40, 20, 10] },   // Zona muerta detectada
        { day: 'Vie', hours: [20, 40, 35, 60, 80, 95, 70, 40] },
        { day: 'Sáb', hours: [30, 50, 45, 70, 90, 100, 80, 50] },
        { day: 'Dom', hours: [25, 45, 40, 65, 85, 90, 75, 45] },
    ],

    // 4. Reportes Predefinidos para el Chat (Sugerencias)
    suggestedReports: [
        {
            id: 'rep_inefficiency',
            label: '📉 Análisis de Ineficiencia',
            command: 'Analiza el capital ineficiente',
            viewTarget: 'INVENTORY_TABLE'
        },
        {
            id: 'rep_trends',
            label: '🔥 Mapa de Calor de Ventas',
            command: 'Muestra patrones de venta',
            viewTarget: 'ANALYSIS_HEATMAP'
        },
        {
            id: 'rep_financial',
            label: '💰 Desglose de Pérdidas',
            command: 'Detalla el costo de inacción',
            viewTarget: 'FINANCIAL_BREAKDOWN'
        }
    ]
};
