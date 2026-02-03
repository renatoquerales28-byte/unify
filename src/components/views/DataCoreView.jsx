import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

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

                {/* Sugerencias Rápidas */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {[
                        "💰 Rentabilidad por Canal",
                        "📦 Riesgo de Quiebre de Stock",
                        "🚚 Tiempos de Entrega Logística",
                        "👥 Churn Rate de Clientes VIP"
                    ].map((tag, i) => (
                        <button key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-500 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all">
                            {tag}
                        </button>
                    ))}
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
