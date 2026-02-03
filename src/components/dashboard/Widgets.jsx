import React from 'react';
import { AlertTriangle, Zap } from 'lucide-react';

// 1. Matriz Héroes vs Parásitos (Scatter Plot)
export const HeroesMatrix = () => {
    // Mock data points
    const points = [
        { x: 80, y: 85, type: 'hero', sku: 'SKU-A1' },
        { x: 75, y: 70, type: 'hero', sku: 'SKU-A2' },
        { x: 90, y: 60, type: 'hero', sku: 'SKU-A3' },
        { x: 15, y: 20, type: 'parasite', sku: 'SKU-P1' },
        { x: 10, y: 30, type: 'parasite', sku: 'SKU-P2' },
        { x: 20, y: 15, type: 'parasite', sku: 'SKU-P3' },
        { x: 50, y: 50, type: 'neutral', sku: 'SKU-N1' },
        { x: 45, y: 55, type: 'neutral', sku: 'SKU-N2' },
    ];

    return (
        <div className="w-full h-64 relative bg-slate-50 rounded-md border border-slate-200 p-4">
            <div className="absolute inset-4 border-l border-b border-slate-300">
                <div className="absolute top-1/2 w-full border-t border-slate-200 border-dashed"></div>
                <div className="absolute left-1/2 h-full border-r border-slate-200 border-dashed"></div>
            </div>

            <div className="absolute left-6 top-2 text-[10px] text-slate-400 font-mono uppercase">Margen (%)</div>
            <div className="absolute right-4 bottom-6 text-[10px] text-slate-400 font-mono uppercase">Velocidad de Venta</div>

            <div className="absolute top-6 right-6 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">ALTO RENDIMIENTO</div>
            <div className="absolute bottom-6 left-6 text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100">BAJO RENDIMIENTO</div>

            {points.map((p, i) => (
                <div
                    key={i}
                    className={`absolute w-3 h-3 rounded-full border cursor-pointer hover:scale-150 transition-transform group
            ${p.type === 'hero' ? 'bg-emerald-500 border-emerald-600' :
                            p.type === 'parasite' ? 'bg-red-500 border-red-600' : 'bg-slate-400 border-slate-500'}`}
                    style={{ left: `${p.x}%`, bottom: `${p.y}%` }}
                >
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-10 pointer-events-none">
                        {p.sku}
                    </div>
                </div>
            ))}
        </div>
    );
};

// 2. Action Feed (Prescripciones)
export const PrescriptionCard = ({ priority, title, desc, impact }) => (
    <div className={`p-3 rounded-md border mb-3 flex gap-3 cursor-pointer transition-all
    ${priority === 'critical' ? 'bg-red-50/50 border-red-100 hover:border-red-200' : 'bg-blue-50/50 border-blue-100 hover:border-blue-200'}`}>
        <div className={`mt-0.5 ${priority === 'critical' ? 'text-red-500' : 'text-blue-500'}`}>
            {priority === 'critical' ? <AlertTriangle size={16} /> : <Zap size={16} />}
        </div>
        <div className="flex-1">
            <div className="flex justify-between items-start">
                <h4 className={`text-xs font-bold uppercase tracking-wide ${priority === 'critical' ? 'text-red-700' : 'text-blue-700'}`}>{title}</h4>
                <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">{impact}</span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-snug">{desc}</p>
            <div className="mt-2 flex gap-2">
                <button className="text-[10px] font-medium px-2 py-1 bg-white border border-slate-200 rounded hover:bg-slate-50 text-slate-700">Ejecutar</button>
                <button className="text-[10px] text-slate-400 hover:text-slate-600">Ignorar</button>
            </div>
        </div>
    </div>
);
