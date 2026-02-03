import { MOCK_DATA } from '../data/mockData';

// --- Complex Charts & Views ---

export const WaterfallChart = ({ data }) => {
    const chartData = data || MOCK_DATA.financialBreakdown;

    return (
        <div className="h-full w-full flex items-end justify-center gap-4 p-8 bg-slate-50 border border-slate-200">
            {chartData.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="text-[10px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity mb-1">
                        ${Math.abs(item.value).toFixed(0)}
                    </div>
                    <div
                        className={`w-16 ${item.color} transition-all duration-500 hover:brightness-110 relative`}
                        style={{ height: `${Math.max(Math.abs(item.value) / 1000, 4)}px` }}
                    >
                        {item.type === 'loss' && (
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-600 font-bold text-xs">
                                -${Math.abs(item.value).toFixed(0)}
                            </div>
                        )}
                    </div>
                    <div className="text-[9px] font-bold uppercase text-slate-600 w-20 text-center leading-tight">
                        {item.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export const SalesHeatmap = ({ data }) => {
    const safeData = (data && data.length > 0) ? data : MOCK_DATA.salesHeatmap;

    return (
        <div className="h-full w-full p-6 flex flex-col justify-center">
            <div className="flex justify-between mb-4">
                <h4 className="text-sm font-bold text-slate-800 uppercase font-mono">Sales Intensity :: Analysis</h4>
                <div className="flex gap-2 text-[9px] uppercase font-mono items-center">
                    <span>Low</span>
                    <div className="w-20 h-2 bg-gradient-to-r from-blue-50 to-blue-900"></div>
                    <span>High</span>
                </div>
            </div>
            <div className="grid grid-rows-7 gap-1">
                {safeData.map((day, dIdx) => (
                    <div key={dIdx} className="flex gap-1 items-center">
                        <span className="w-8 text-[10px] font-mono text-slate-500 text-right pr-2">{day.day}</span>
                        {day.hours.map((intensity, hIdx) => (
                            <div
                                key={hIdx}
                                className="flex-1 h-8 bg-blue-600 transition-all hover:scale-105 border border-white"
                                style={{ opacity: intensity / 100 }}
                                title={`Intensity: ${intensity}%`}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const InventoryTable = ({ data }) => {
    const items = (data && data.length > 0) ? data : MOCK_DATA.inventory;
    const inefficientItems = items.filter(i => i.status === 'INEFFICIENT');

    return (
        <div className="h-full w-full overflow-auto bg-white">
            <table className="w-full text-left border-collapse">
                <thead className="bg-slate-100 sticky top-0 border-b border-slate-300">
                    <tr>
                        {['SKU', 'Product Name', 'Category', 'Margin', 'Days Stock', 'Status'].map(h => (
                            <th key={h} className="p-3 text-[10px] font-bold text-slate-500 uppercase font-mono tracking-wider">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {inefficientItems.length > 0 ? inefficientItems.map((item, idx) => (
                        <tr key={idx} className="hover:bg-red-50/50 transition-colors group cursor-pointer">
                            <td className="p-3 text-xs font-mono font-bold text-slate-700 border-r border-slate-100 group-hover:text-red-700">{item.id}</td>
                            <td className="p-3 text-xs text-slate-600 font-medium truncate max-w-[200px]">{item.name}</td>
                            <td className="p-3 text-xs text-slate-500">{item.category}</td>
                            <td className="p-3 text-xs font-mono text-slate-600">{item.margin}%</td>
                            <td className="p-3 text-xs font-mono text-red-600 font-bold">{item.daysInStock}d</td>
                            <td className="p-3">
                                <span className={`px-1.5 py-0.5 text-[10px] font-mono uppercase border bg-red-50 text-red-700 border-red-300`}>
                                    INEFFICIENT
                                </span>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="6" className="p-8 text-center text-xs text-slate-400 font-mono">
                                SYSTEM SCAN COMPLETE. NO INEFFICIENT CAPITAL DETECTED.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
