import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, TrendingUp, PackageSearch, Truck, Users, ChevronLeft, ChevronRight, AlertCircle, Layers, Zap, BarChart3 } from 'lucide-react';

export const DataCoreView = () => {
    const [query, setQuery] = useState('');
    const textareaRef = useRef(null);

    // Auto-resize logic
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [query]);

    const handleSearch = () => {
        if (!query.trim()) return;
        console.log("Searching:", query);
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-slate-50 relative overflow-hidden">
            {/* Header Mínimalista */}
            <div className="absolute top-0 w-full p-6 flex justify-between items-center z-10">
                <div className="flex items-center gap-2 opacity-50">
                    <span className="text-xs font-mono tracking-wider">CENTHROPY DATA CORE</span>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-start pt-0 -mt-5 p-8 max-w-3xl mx-auto w-full z-0">

                {/* LOGO: Contenedor ajustado para visibilidad */}
                <div className="flex flex-col items-center justify-start h-[280px] overflow-hidden animate-in fade-in zoom-in duration-700 z-10">
                    <img src="/Centhronpy_15.png" alt="Centhropy" className="w-80 h-auto object-contain pointer-events-none" />
                </div>

                {/* TEXTO: Reajustado para la nueva altura de caja */}
                <div className="flex flex-col items-center gap-1.5 w-full text-center -mt-16 z-20">
                    <h1 className="text-3xl font-light text-slate-800 tracking-tight whitespace-nowrap">
                        ¿Qué quieres saber sobre tu empresa hoy?
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                        Acceso total a Inventario, Finanzas, Logística y CRM.
                        Las respuestas se generan en tiempo real cruzando todas las fuentes de datos.
                    </p>
                </div>

                {/* CHAT: Posición mantenida con margen estándar */}
                <div className="w-full relative group px-4 md:px-0 mt-8 z-30">

                    {/* Tactical Suggestion Rail (Estilo Dashboard) */}
                    <div className="flex items-center gap-1 mb-3">
                        <button
                            onClick={() => {
                                const container = document.getElementById('datacore-suggestion-rail');
                                if (container) container.scrollLeft -= 150;
                            }}
                            className="w-7 h-[26px] flex items-center justify-center bg-white border border-slate-200 rounded-sm hover:border-blue-400 hover:bg-blue-50/50 text-slate-400 hover:text-blue-600 transition-all flex-shrink-0"
                        >
                            <ChevronLeft size={12} />
                        </button>

                        <div
                            id="datacore-suggestion-rail"
                            className="flex-1 flex gap-2 overflow-x-hidden scroll-smooth [&::-webkit-scrollbar]:hidden"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {[
                                { label: "💰 Rentabilidad", text: "Ver rentabilidad detallada por canal de venta.", icon: <TrendingUp size={10} /> },
                                { label: "📦 Riesgo Stock", text: "Identificar SKUs con riesgo de quiebre de stock.", icon: <PackageSearch size={10} /> },
                                { label: "⚡ Simular Impacto", text: "Simular impacto de un 15% de descuento en baja rotación.", icon: <Zap size={10} /> },
                                { label: "📊 Cruzar Data", text: "Cruzar ventas vs niveles de inventario por categoría.", icon: <Layers size={10} /> },
                                { label: "🚚 Logística", text: "Análisis de tiempos de entrega y logística.", icon: <Truck size={10} /> },
                                { label: "⚠️ Alertas", text: "Ver alertas críticas del sistema hoy.", icon: <AlertCircle size={10} /> },
                                { label: "📈 Proyección", text: "Mostrar proyección de ventas para el próximo trimestre.", icon: <BarChart3 size={10} /> },
                                { label: "👥 Churn VIP", text: "Reporte de tasa de abandono de clientes VIP.", icon: <Users size={10} /> }
                            ].map((s, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setQuery(s.text)}
                                    className="flex-shrink-0 flex items-center gap-1.5 px-2 py-1 bg-white border border-slate-200 rounded-sm hover:border-blue-400 hover:bg-blue-50/30 transition-all group h-[26px]"
                                >
                                    <span className="text-slate-400 group-hover:text-blue-500 transition-colors">{s.icon}</span>
                                    <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-tighter group-hover:text-blue-600 transition-colors">
                                        {s.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                const container = document.getElementById('datacore-suggestion-rail');
                                if (container) container.scrollLeft += 150;
                            }}
                            className="w-7 h-[26px] flex items-center justify-center bg-white border border-slate-200 rounded-sm hover:border-blue-400 hover:bg-blue-50/50 text-slate-400 hover:text-blue-600 transition-all flex-shrink-0"
                        >
                            <ChevronRight size={12} />
                        </button>
                    </div>

                    <div className="relative flex items-end gap-2 p-3 bg-white border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">

                        <textarea
                            ref={textareaRef}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSearch())}
                            className="w-full max-h-[120px] min-h-[40px] bg-transparent border-none outline-none focus:ring-0 p-2 text-base text-slate-700 placeholder:text-slate-300 resize-none overflow-y-auto leading-relaxed [&::-webkit-scrollbar]:hidden"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            placeholder="Escribe un mensaje..."
                            rows={1}
                        ></textarea>

                        <button
                            onClick={handleSearch}
                            disabled={!query.trim()}
                            className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all mb-1
                                ${query.trim()
                                    ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md transform hover:scale-105'
                                    : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}
                        >
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </button>

                    </div>
                    <div className={`absolute -bottom-6 right-2 text-[10px] font-mono transition-opacity duration-300 ${query.length > 0 ? 'text-slate-400 opacity-100' : 'opacity-0'}`}>
                        {query.length} chars
                    </div>
                </div>



            </div>

            {/* Footer decorativo */}
            <div className="absolute bottom-6 w-full text-center">
                <p className="text-[10px] text-slate-300 font-mono">
                    Powered by Unify Protocol • Secure Data Vault
                </p>
            </div>
        </div>
    );
};
