import React, { useState } from 'react';
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
    AlertCircle,
    PanelRightClose,
    PanelRightOpen,
    Plus,
    BarChart3,
    Database,
    Layers,
    Users,
    GitBranch,
    ArrowUpRight,
    ArrowRight,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { Card, Badge } from '../common/UIElements';
import { HeroesMatrix, PrescriptionCard } from '../dashboard/Widgets';
import { ChatMessage } from '../chat/ChatComponents';

// --- Launcher Component (The "New Tab" Page) ---
const TabLauncher = ({ onSelectPerspective, onSelectCorrelation }) => {
    const perspectives = [
        { id: 'ventas', title: 'Ventas', type: 'Módulo Operativo', desc: 'Ingresos, conversión y ROAS.', icon: <BarChart3 /> },
        { id: 'inventario', title: 'Inventario', type: 'Módulo de Activos', desc: 'Rotación, stock y capital.', icon: <Database /> },
        { id: 'clientes', title: 'Clientes', type: 'Módulo de Usuario', desc: 'Retención, LTV y segmentación.', icon: <Users /> },
        { id: 'logistica', title: 'Logística', type: 'Módulo de Flujo', desc: 'Tiempos y costos de entrega.', icon: <GitBranch /> },
    ];

    const correlations = [
        { id: 'eficiencia', title: 'Eficiencia Comercial', type: 'Cruzado de Negocio', desc: 'Ventas + Marketing', icon: <Zap /> },
        { id: 'salud', title: 'Salud de Flujo de Caja', type: 'Análisis de Riesgo', desc: 'Ventas + Inventario', icon: <Activity /> },
        { id: 'retencion', title: 'Retención Táctica', type: 'Relación de Servicio', desc: 'Clientes + Logística', icon: <Layers /> },
    ];

    return (
        <div className="flex-1 overflow-auto bg-[#f8fafc] p-10 animate-in fade-in duration-300">
            <div className="max-w-4xl mx-auto w-full">

                {/* Header (Mirroring OrgSelector style) */}
                <div className="mb-8 border-l-2 border-blue-600 pl-5">
                    <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-blue-600 uppercase">Analytical Core / Unify</span>
                    <h2 className="text-2xl font-light text-slate-900 mt-1 tracking-tight uppercase">Seleccionar Nueva Vista</h2>
                    <p className="text-slate-500 mt-1 max-w-md text-[11px] font-mono opacity-60">
                        [SELECT_PERSPECTIVE] Iniciar sesión de análisis profundo.
                    </p>
                </div>

                {/* Perspectives Grid */}
                <div className="space-y-3 mb-10">
                    <h3 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-1.5 flex items-center gap-2">
                        Perspectivas Directas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {perspectives.map(p => (
                            <button
                                key={p.id}
                                onClick={() => onSelectPerspective(p)}
                                className="group p-4 bg-white border border-slate-200 hover:border-blue-500 hover:bg-slate-50 transition-all text-left flex flex-col gap-3 h-full relative"
                            >
                                <div className="w-9 h-9 flex items-center justify-center bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                                    {React.cloneElement(p.icon, { size: 18, strokeWidth: 1.5 })}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-base font-medium text-slate-900 tracking-tight leading-tight">{p.title}</h4>
                                    <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-0.5 block">{p.type}</span>
                                    <p className="text-[10px] text-slate-500 mt-2 leading-tight font-mono opacity-70">{p.desc}</p>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-blue-600 italic">Iniciar</span>
                                    <ArrowUpRight size={12} className="text-blue-400" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Correlations Grid */}
                <div className="space-y-3">
                    <h3 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-1.5 flex items-center gap-2">
                        Correlaciones Inteligentes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {correlations.map(c => (
                            <button
                                key={c.id}
                                onClick={() => onSelectCorrelation(c)}
                                className="group p-4 bg-white border border-slate-200 hover:border-emerald-500 hover:bg-slate-50 transition-all text-left flex flex-col gap-3 h-full relative"
                            >
                                <div className="w-9 h-9 flex items-center justify-center bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-600 transition-colors">
                                    {React.cloneElement(c.icon, { size: 18, strokeWidth: 1.5 })}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-base font-medium text-slate-900 tracking-tight leading-tight">{c.title}</h4>
                                    <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-0.5 block">{c.type}</span>
                                    <p className="text-[10px] text-slate-500 mt-2 leading-tight font-mono opacity-70">{c.desc}</p>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-emerald-600 italic">Vincular</span>
                                    <ArrowUpRight size={12} className="text-emerald-400" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

// --- Standard Dashboard Content ---
const DashboardContent = ({ title, status }) => (
    <div className="flex-1 overflow-auto p-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-end justify-between border-b border-slate-200 pb-4">
                <div>
                    <h1 className="text-2xl font-light text-slate-900 tracking-tight flex items-center gap-3">
                        {title}
                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded font-mono tracking-wide font-medium">
                            {status}
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-1 p-0 flex flex-col h-96">
                    <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                        <h3 className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <Zap size={16} className="text-blue-600" /> Prescripciones Activas
                        </h3>
                        <Badge type="blue">3 Nuevas</Badge>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-slate-200">
                        <PrescriptionCard priority="critical" title="Liquidar Stock" desc="Sandalias verano 2023." impact="+$4.5k Cash" />
                        <PrescriptionCard priority="opportunity" title="Reabastecer" desc="SKU-8920 vendiendo 2x." impact="Evitar Pérdida" />
                    </div>
                </Card>
                <Card className="lg:col-span-2 p-1 h-96 flex flex-col">
                    <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <LayoutDashboard size={16} className="text-slate-500" /> Matriz de Rentabilidad
                        </h3>
                    </div>
                    <div className="flex-1 p-4 flex items-center justify-center">
                        <HeroesMatrix />
                    </div>
                </Card>
            </div>
        </div>
    </div>
);

// --- MAIN WRAPPER ---
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
    const [tabs, setTabs] = useState([
        { id: '1', type: 'perspective', title: 'Unify_Control_Center', context: 'general' }
    ]);
    const [activeTabId, setActiveTabId] = useState('1');

    const activeTab = tabs.find(t => t.id === activeTabId);

    const addNewTab = () => {
        const newId = Date.now().toString();
        setTabs([...tabs, { id: newId, type: 'launcher', title: 'Nueva Pestaña' }]);
        setActiveTabId(newId);
    };

    const closeTab = (id, e) => {
        e.stopPropagation();
        if (tabs.length === 1) return;
        const newTabs = tabs.filter(t => t.id !== id);
        setTabs(newTabs);
        if (activeTabId === id) {
            setActiveTabId(newTabs[0].id);
        }
    };

    const updateTab = (id, updates) => {
        setTabs(tabs.map(t => t.id === id ? { ...t, ...updates } : t));
    };

    return (
        <>
            <div className="flex-1 flex flex-col min-w-0 bg-slate-50 relative">

                {/* --- 1. TOP TABS (Browser Style) --- */}
                <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-end px-2 gap-1 overflow-x-auto overflow-y-hidden custom-scrollbar pr-12">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            onClick={() => setActiveTabId(tab.id)}
                            className={`px-4 py-2 border-r border-slate-200 min-w-[140px] max-w-[200px] flex items-center gap-2 cursor-pointer transition-all relative rounded-t-sm group
                            ${activeTabId === tab.id
                                    ? 'bg-slate-50 border-t-2 border-blue-500 text-slate-800 shadow-[0_-2px_4px_rgba(0,0,0,0.02)] z-10'
                                    : 'bg-slate-200/50 hover:bg-slate-100 text-slate-500 border-t border-transparent'}`}
                        >
                            {tab.type === 'launcher' ? <Plus size={12} className="opacity-50" /> : <Activity size={12} className={activeTabId === tab.id ? 'text-blue-600' : 'text-slate-400'} />}
                            <span className="text-[10px] font-mono font-medium truncate flex-1 uppercase tracking-wider">{tab.title}</span>
                            <button
                                onClick={(e) => closeTab(tab.id, e)}
                                className={`p-0.5 rounded hover:bg-slate-300 transition-colors opacity-0 group-hover:opacity-100 ${activeTabId === tab.id ? 'opacity-100' : ''}`}
                            >
                                <X size={10} />
                            </button>
                        </div>
                    ))}

                    {/* New Tab Button */}
                    <button
                        onClick={addNewTab}
                        className="p-2 mb-1 text-slate-500 hover:bg-slate-200 rounded-md transition-colors"
                    >
                        <Plus size={14} />
                    </button>

                    {/* Open Chat Button (Visible only when chat is closed) */}
                    {!chatOpen && (
                        <button
                            onClick={() => setChatOpen(true)}
                            className="absolute right-0 top-0 w-10 h-10 flex items-center justify-center bg-white border-l border-b border-slate-200 text-slate-400 hover:text-slate-600 transition-all z-20"
                            title="Abrir Copilot"
                        >
                            <PanelRightOpen size={20} strokeWidth={1.5} />
                        </button>
                    )}
                </div>

                {/* --- 2. TOOLBAR (Breadcrumbs) --- */}
                <div className="h-8 border-b border-slate-200 flex items-center px-4 gap-2 text-[10px] text-slate-500 bg-white justify-between">
                    <div className="flex items-center gap-2 overflow-hidden">
                        <span className="font-bold text-slate-700 uppercase tracking-widest flex-shrink-0">Unify Protocol</span>
                        <ChevronRight size={10} className="flex-shrink-0" />
                        <span className="text-slate-400 truncate uppercase">
                            {activeTab?.type === 'launcher' ? 'System_Selection' : `Centhropy Global / ${activeTab?.title}`}
                        </span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-[9px]">
                        <span className="flex items-center gap-1 text-emerald-600"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> S: LIVE</span>
                        <span className="flex items-center gap-1 text-emerald-600"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> E: SYNC</span>
                    </div>
                </div>

                {/* --- 3. DYNAMIC CONTENT --- */}
                {activeTab?.type === 'launcher' ? (
                    <TabLauncher
                        onSelectPerspective={(p) => updateTab(activeTabId, { type: 'perspective', title: p.title, context: p.id })}
                        onSelectCorrelation={(c) => updateTab(activeTabId, { type: 'correlation', title: `CORRELACIÓN: ${c.title}`, context: c.id })}
                    />
                ) : (
                    <DashboardContent
                        title={activeTab?.title || "Control Center"}
                        status={activeTab?.type === 'correlation' ? "Mode: Correlation" : "Mode: Perspective"}
                    />
                )}

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
                        {/* Tactical Suggestion Rail */}
                        <div className="flex items-center gap-1 mb-3">
                            <button
                                onClick={() => {
                                    const container = document.getElementById('dashboard-suggestion-rail');
                                    if (container) container.scrollLeft -= 100;
                                }}
                                className="w-7 h-[26px] flex items-center justify-center bg-white border border-slate-200 rounded-sm hover:border-blue-400 hover:bg-blue-50/50 text-slate-400 hover:text-blue-600 transition-all flex-shrink-0"
                            >
                                <ChevronLeft size={12} />
                            </button>

                            <div
                                id="dashboard-suggestion-rail"
                                className="flex-1 flex gap-2 overflow-x-hidden scroll-smooth no-scrollbar"
                            >
                                {[
                                    { label: "Simular Impacto", text: "Simular impacto de un 15% de descuento en baja rotación.", icon: <Zap size={10} /> },
                                    { label: "Analizar Liquidez", text: "¿Cómo puedo liberar $10k de flujo de caja hoy?", icon: <Activity size={10} /> },
                                    { label: "Riesgo Stock", text: "Ver SKUs con riesgo de quiebre en los próximos 15 días.", icon: <AlertCircle size={10} /> },
                                    { label: "Cruzar Data", text: "Cruzar ventas vs niveles de inventario por categoría.", icon: <Layers size={10} /> }
                                ].map((s, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSend(s.text)}
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
                                    const container = document.getElementById('dashboard-suggestion-rail');
                                    if (container) container.scrollLeft += 100;
                                }}
                                className="w-7 h-[26px] flex items-center justify-center bg-white border border-slate-200 rounded-sm hover:border-blue-400 hover:bg-blue-50/50 text-slate-400 hover:text-blue-600 transition-all flex-shrink-0"
                            >
                                <ChevronRight size={12} />
                            </button>
                        </div>

                        <div className="flex items-end gap-2 p-2 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all shadow-sm">
                            <textarea
                                ref={textareaRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                                className="w-full max-h-32 min-h-[36px] bg-transparent border-none outline-none focus:ring-0 p-2 text-sm text-slate-700 placeholder:text-slate-400 resize-none overflow-y-auto leading-relaxed [&::-webkit-scrollbar]:hidden"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                placeholder="Preguntar a Cordycep..."
                                rows={1}
                            ></textarea>

                            <button
                                onClick={handleSend}
                                disabled={!input.trim()}
                                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all mb-0.5
                                    ${input.trim()
                                        ? 'bg-slate-900 text-white hover:bg-black shadow-md'
                                        : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}
                            >
                                <ArrowRight size={14} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
