import React from 'react';
import {
    Activity,
    Download,
    Zap,
    LayoutDashboard,
    Table as TableIcon,
    CheckCircle2,
    ChevronRight,
    X,
    Cpu,
    PanelRightClose
} from 'lucide-react';
import { Card, Badge } from '../common/UIElements';
import { HeroesMatrix, PrescriptionCard } from '../dashboard/Widgets';
import { ChatMessage } from '../chat/ChatComponents';

export const DashboardView = ({
    dashboardData,
    messages,
    input,
    setInput,
    handleSend,
    chatOpen,
    setChatOpen,
    chatEndRef,
    textareaRef,
    isTyping
}) => {
    return (
        <>
            <div className="flex-1 flex flex-col min-w-0 bg-slate-50 relative">
                {/* Top Tabs */}
                <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-end px-2 gap-1 overflow-x-auto">
                    <div className="px-4 py-2 bg-slate-50 border-t-2 border-blue-500 text-slate-800 text-xs flex items-center gap-2 border-r border-slate-200 min-w-fit rounded-t-sm z-10 font-medium">
                        <Activity size={12} className="text-blue-600" />
                        <span className="font-mono">Unify_Control_Center</span>
                        <button className="hover:bg-slate-200 p-0.5 rounded ml-2 text-slate-500"><X size={10} /></button>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="h-8 border-b border-slate-200 flex items-center px-4 gap-2 text-xs text-slate-500 bg-white justify-between">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-700 tracking-wide font-sans">Unify Protocol</span>
                        <ChevronRight size={12} />
                        <span className="text-slate-700 font-medium">{dashboardData.title}</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-[10px]">
                        <span className="flex items-center gap-1 text-emerald-600"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Shopify: Live</span>
                        <span className="flex items-center gap-1 text-emerald-600"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Odoo ERP: Synced</span>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 overflow-auto p-6 bg-slate-50/50">
                    <div className="max-w-6xl mx-auto space-y-6">

                        {/* Header */}
                        <div className="flex items-end justify-between border-b border-slate-200 pb-4">
                            <div>
                                <h1 className="text-2xl font-light text-slate-900 tracking-tight flex items-center gap-3">
                                    {dashboardData.title}
                                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded font-mono tracking-wide font-medium">
                                        {dashboardData.status}
                                    </span>
                                </h1>
                                <p className="text-sm text-slate-500 mt-1 font-mono">Filosofía: Data-Driven Growth | Unify Protocol v1.0</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-xs text-white rounded transition-colors border border-slate-900">
                                    <Download size={14} /> Full Report
                                </button>
                            </div>
                        </div>

                        {/* Financial Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { label: "Capital Inmovilizado", val: "$45.2k", delta: "-8% vs last week", neutral: false, bad: true },
                                { label: "Flujo de Caja Proyectado", val: "$12.5k", delta: "+15% if executed", neutral: false, good: true },
                                { label: "Stock Alta Demanda (Riesgo)", val: "12 SKUs", delta: "Critical Alert", neutral: false, critical: true },
                                { label: "Margen Global Actual", val: "22.4%", delta: "-1.2% trend", neutral: true }
                            ].map((m, i) => (
                                <Card key={i} className={`p-4 hover:border-slate-300 transition-colors ${m.critical ? 'border-red-200 bg-red-50/10' : ''}`}>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-mono font-medium">{m.label}</p>
                                    <div className="mt-2 flex flex-col">
                                        <span className="text-2xl font-light text-slate-900">{m.val}</span>
                                        <span className={`text-[10px] font-mono mt-1 ${m.good ? 'text-emerald-600' : m.bad ? 'text-amber-600' : m.critical ? 'text-red-600 font-bold' : 'text-slate-500'}`}>
                                            {m.delta}
                                        </span>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Split View: Action Feed & Matrix */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                            {/* Col 1: Action Feed */}
                            <Card className="lg:col-span-1 p-0 flex flex-col h-96">
                                <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                    <h3 className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                        <Zap size={16} className="text-blue-600" /> Prescripciones Activas
                                    </h3>
                                    <Badge type="blue">3 Nuevas</Badge>
                                </div>
                                <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-slate-200">
                                    <PrescriptionCard
                                        priority="critical"
                                        title="Liquidar Stock Inmovilizado"
                                        desc="Detectados 150 items de 'Sandalias Verano 2023' sin movimiento en 90 días."
                                        impact="+$4.5k Cash"
                                    />
                                    <PrescriptionCard
                                        priority="opportunity"
                                        title="Reabastecer Alta Demanda"
                                        desc="SKU-8920 está vendiendo 2x más rápido de lo previsto. Stockout en 5 días."
                                        impact="Evitar Pérdida"
                                    />
                                    <PrescriptionCard
                                        priority="opportunity"
                                        title="Ajuste de Precio"
                                        desc="Elasticidad permite subir 5% precio en 'Botas Invierno' sin perder volumen."
                                        impact="+2% Margen"
                                    />
                                </div>
                            </Card>

                            {/* Col 2: Heroes vs Parasites Matrix */}
                            <Card className="lg:col-span-2 p-1 h-96 flex flex-col">
                                <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
                                    <h3 className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                        <LayoutDashboard size={16} className="text-slate-500" /> Matriz de Rentabilidad del Inventario
                                    </h3>
                                    <div className="flex gap-2">
                                        <div className="flex items-center gap-1 text-[10px] text-slate-500"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Alto Rendimiento</div>
                                        <div className="flex items-center gap-1 text-[10px] text-slate-500"><div className="w-2 h-2 rounded-full bg-red-500"></div> Bajo Rendimiento</div>
                                    </div>
                                </div>
                                <div className="flex-1 p-4 flex items-center justify-center">
                                    <HeroesMatrix />
                                </div>
                            </Card>
                        </div>

                        {/* Detailed Table (Auditables) */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <h3 className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                    <TableIcon size={16} className="text-slate-500" /> Auditoría de Datos (Fuente de la Verdad)
                                </h3>
                                <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium">
                                    <CheckCircle2 size={12} /> Datos Validados
                                </button>
                            </div>
                            <div className="overflow-x-auto text-xs font-mono border border-slate-200 rounded-md bg-white">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-slate-100 text-slate-600 uppercase tracking-wider">
                                        <tr>
                                            <th className="p-3 border-b border-slate-200">SKU_ID</th>
                                            <th className="p-3 border-b border-slate-200">Clasificación</th>
                                            <th className="p-3 border-b border-slate-200 text-right">Margen Real</th>
                                            <th className="p-3 border-b border-slate-200 text-right">Días Inventario</th>
                                            <th className="p-3 border-b border-slate-200">Acción Sugerida</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-700">
                                        <tr className="border-b border-slate-100 hover:bg-slate-50">
                                            <td className="p-3 font-medium">SKU-A1</td>
                                            <td className="p-3"><span className="text-emerald-700 bg-emerald-100 px-1 rounded">ALTO RENDIMIENTO</span></td>
                                            <td className="p-3 text-right">45%</td>
                                            <td className="p-3 text-right">12</td>
                                            <td className="p-3 text-blue-600 font-bold">REABASTECER</td>
                                        </tr>
                                        <tr className="border-b border-slate-100 hover:bg-slate-50">
                                            <td className="p-3 font-medium">SKU-P1</td>
                                            <td className="p-3"><span className="text-red-700 bg-red-100 px-1 rounded">BAJO RENDIMIENTO</span></td>
                                            <td className="p-3 text-right">15%</td>
                                            <td className="p-3 text-right">140</td>
                                            <td className="p-3 text-red-600 font-bold">LIQUIDAR</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* PANEL DERECHO: Chat Copilot (Solo visible en Dashboard) */}
            {chatOpen && (
                <div className="w-96 border-l border-slate-200 bg-white flex flex-col z-10 transition-all duration-300">
                    <div className="h-10 border-b border-slate-200 flex items-center justify-between pl-4 bg-white">
                        <div className="flex flex-col justify-center h-full pt-1 overflow-hidden">
                            <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-slate-800 whitespace-nowrap">
                                <Cpu size={14} className="text-blue-600" />
                                CORDYCEP
                            </div>
                            <div className="flex items-center gap-1 pl-6 leading-none pb-1 opacity-70">
                                <span className="text-[9px] text-slate-400 font-mono tracking-wider">Powered by Unify</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setChatOpen(false)}
                            className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors border-l border-slate-100"
                        >
                            <PanelRightClose size={20} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-slate-200">
                        {messages.map((msg, i) => <ChatMessage key={i} message={msg} />)}
                        {isTyping && (
                            <div className="text-[10px] font-mono text-blue-600 animate-pulse flex items-center gap-2 ml-4 font-medium">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                PROCESSING...
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    <div className="p-4 border-t border-slate-200 bg-white">
                        <div className="flex items-end gap-2 p-2 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all shadow-sm">
                            <textarea
                                ref={textareaRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                                className="w-full max-h-32 min-h-[36px] bg-transparent border-none outline-none focus:ring-0 p-2 text-sm text-slate-700 placeholder:text-slate-400 resize-none overflow-y-auto leading-relaxed [&::-webkit-scrollbar]:hidden"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                placeholder="Escribe un mensaje..."
                                rows={1}
                            ></textarea>

                            <button
                                onClick={handleSend}
                                disabled={!input.trim()}
                                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all mb-0.5
                                    ${input.trim()
                                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md transform hover:scale-105'
                                        : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}
                            >
                                <Zap size={14} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
