import React, { useState, useEffect, useRef } from 'react';
import {
    Terminal,
    Search,
    Database,
    BarChart3,
    Cpu,
    Send,
    MoreHorizontal,
    Layers,
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    Settings,
    Activity,
    Table as TableIcon,
    Download,
    Share2,
    Maximize2,
    X,
    PanelRightClose,
    PanelRightOpen,
    FileCode,
    GitBranch,
    AlertTriangle,
    ArrowUpRight,
    ArrowDownRight,
    ArrowRight,
    Zap,
    CheckCircle2
} from 'lucide-react';

// --- Componentes de Marca (Centhropy Brand) ---

const CenthropyLogo = ({ className = "w-8 h-8" }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Recreación exacta del logo "Stack" de Centhropy */}
        <ellipse cx="50" cy="76" rx="42" ry="14" fill="#e2e8f0" />
        <ellipse cx="50" cy="64" rx="42" ry="14" fill="#94a3b8" />
        <ellipse cx="50" cy="52" rx="42" ry="14" fill="#475569" />
        <ellipse cx="50" cy="40" rx="42" ry="14" fill="#0f172a" />
    </svg>
);

// --- Componentes de UI Estilo Palantir / Foundry (Light Mode) ---

const Card = ({ children, className = "" }) => (
    <div className={`bg-white border border-slate-200 ${className}`}>
        {children}
    </div>
);

const Badge = ({ type = "neutral", children }) => {
    const styles = {
        neutral: "bg-slate-100 text-slate-600 border-slate-200",
        success: "bg-emerald-50 text-emerald-700 border-emerald-200",
        warning: "bg-amber-50 text-amber-700 border-amber-200",
        critical: "bg-red-50 text-red-700 border-red-200",
        blue: "bg-blue-50 text-blue-700 border-blue-200",
    };
    return (
        <span className={`px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase border ${styles[type]} rounded-sm`}>
            {children}
        </span>
    );
};

// --- Nuevos Widgets de Visualización (Unify Logic) ---

// 1. Matriz Héroes vs Parásitos (Scatter Plot)
const HeroesMatrix = () => {
    // Mock data points: { x: velocity, y: margin, type: 'hero' | 'parasite' | 'neutral' }
    const points = [
        { x: 80, y: 85, type: 'hero', sku: 'SKU-A1' }, // High Vel, High Margin
        { x: 75, y: 70, type: 'hero', sku: 'SKU-A2' },
        { x: 90, y: 60, type: 'hero', sku: 'SKU-A3' },
        { x: 15, y: 20, type: 'parasite', sku: 'SKU-P1' }, // Low Vel, Low Margin
        { x: 10, y: 30, type: 'parasite', sku: 'SKU-P2' },
        { x: 20, y: 15, type: 'parasite', sku: 'SKU-P3' },
        { x: 50, y: 50, type: 'neutral', sku: 'SKU-N1' },
        { x: 45, y: 55, type: 'neutral', sku: 'SKU-N2' },
    ];

    return (
        <div className="w-full h-64 relative bg-slate-50 rounded-md border border-slate-200 p-4">
            {/* Background Grid Lines */}
            <div className="absolute inset-4 border-l border-b border-slate-300">
                <div className="absolute top-1/2 w-full border-t border-slate-200 border-dashed"></div>
                <div className="absolute left-1/2 h-full border-r border-slate-200 border-dashed"></div>
            </div>

            {/* Labels */}
            <div className="absolute left-6 top-2 text-[10px] text-slate-400 font-mono uppercase">Margen (%)</div>
            <div className="absolute right-4 bottom-6 text-[10px] text-slate-400 font-mono uppercase">Velocidad de Venta</div>

            {/* Quadrant Labels */}
            <div className="absolute top-6 right-6 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">HÉROES</div>
            <div className="absolute bottom-6 left-6 text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100">PARÁSITOS</div>

            {/* Points */}
            {points.map((p, i) => (
                <div
                    key={i}
                    className={`absolute w-3 h-3 rounded-full border cursor-pointer hover:scale-150 transition-transform group
            ${p.type === 'hero' ? 'bg-emerald-500 border-emerald-600' :
                            p.type === 'parasite' ? 'bg-red-500 border-red-600' : 'bg-slate-400 border-slate-500'}`}
                    style={{ left: `${p.x}%`, bottom: `${p.y}%` }}
                >
                    {/* Tooltip */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-10 pointer-events-none">
                        {p.sku}
                    </div>
                </div>
            ))}
        </div>
    );
};

// 2. Action Feed (Prescripciones)
const PrescriptionCard = ({ priority, title, desc, impact }) => (
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

// --- Componentes del Chat (Right Panel) ---

const ChatMessage = ({ message }) => {
    const isUser = message.role === 'user';

    return (
        <div className={`flex w-full mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] ${isUser ? 'ml-4' : 'mr-4'}`}>

                {/* Cabecera del Mensaje */}
                <div className={`flex items-center gap-2 mb-1 text-[10px] text-slate-500 font-mono uppercase tracking-wide ${isUser ? 'justify-end' : 'justify-start'}`}>
                    {!isUser && (
                        <div className="flex items-center gap-1.5">
                            <span className="text-blue-600 font-bold">CORDYCEP</span>
                            <span className="text-slate-500 text-[9px] border px-0.5 border-slate-300 rounded-sm">AI</span>
                        </div>
                    )}
                    <span>{message.timestamp}</span>
                </div>

                {/* Burbuja / Contenido */}
                <div className={`
          p-3 rounded-md border text-sm relative group
          ${isUser
                        ? 'bg-blue-50 border-blue-200 text-slate-800'
                        : 'bg-white border-slate-200 text-slate-700'}
        `}>
                    {message.content}

                    {/* Actions for Agent */}
                    {!isUser && message.actions && (
                        <div className="mt-3 flex gap-2 flex-wrap">
                            {message.actions.map((action, i) => (
                                <button key={i} className={`text-[10px] flex items-center gap-1 px-2 py-1 rounded transition-all border
                    ${action.primary
                                        ? 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700'
                                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'}`}>
                                    {action.icon} {action.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Data Lineage Footer (La Fuente de la Verdad) */}
                    {!isUser && (
                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-2 text-[9px] text-slate-400 font-mono">
                            <Database size={10} />
                            <span>Fuente: {message.lineage || "Unify Protocol"}</span>
                            <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                            <span>Sync: {message.timestamp}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- Main App ---

export default function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [chatOpen, setChatOpen] = useState(true);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    // Mock State
    const [dashboardData, setDashboardData] = useState({
        title: "Unify Control Center",
        status: "Mode: Prescriptive",
        lastUpdated: "Now"
    });

    // Estado Inicial: Cordycep ya ha analizado los datos y da una ORDEN, no un saludo.
    const [messages, setMessages] = useState([
        {
            role: 'agent',
            content: 'Unify Protocol completado. \n\nHe detectado $45,000 en capital atrapado en inventario "Parásito" (baja rotación, bajo margen). Al mismo tiempo, tus productos "Héroe" en la categoría Sneakers tienen riesgo de quiebre de stock en 12 días.\n\nHe preparado un plan de liquidación para liberar flujo de caja inmediato.',
            timestamp: '10:02 AM',
            lineage: "Shopify API + ERP Odoo",
            actions: [
                { label: "Ver Plan de Liquidación", icon: <ArrowDownRight size={10} />, primary: true },
                { label: "Analizar Héroes", icon: <ArrowUpRight size={10} />, primary: false }
            ]
        }
    ]);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = {
            role: 'user',
            content: input,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulacion de interacción
        setTimeout(() => {
            const agentMsg = {
                role: 'agent',
                content: `Ejecutando simulación de precio... \n\nSi aplicas un descuento del 15% a los items parásitos de la Categoría Z, proyectamos una recuperación de $12,500 en flujo de caja esta semana. El margen global bajará un 0.4%, pero ganarás liquidez crítica.`,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                lineage: "Predictive Model v2.1",
                actions: [
                    { label: "Aplicar Cambios en Shopify", icon: <Zap size={10} />, primary: true },
                ]
            };
            setMessages(prev => [...prev, agentMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="flex h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">

            {/* --- 1. LEFT SIDEBAR (Activity Bar) --- */}
            <div className="w-16 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col items-center py-4 z-20">
                <div className="mb-6 group relative">
                    <div className="w-10 h-10 flex items-center justify-center cursor-default hover:scale-105 transition-transform duration-300">
                        <CenthropyLogo className="w-full h-full" />
                    </div>
                    <div className="absolute left-12 top-2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap border border-slate-700 pointer-events-none transition-opacity z-50">
                        <span className="font-bold">Centhropy</span> Platform
                    </div>
                </div>

                <div className="flex flex-col gap-6 w-full px-2 mt-2">
                    {[LayoutDashboard, Search, GitBranch, Database, Activity].map((Icon, idx) => (
                        <button
                            key={idx}
                            className={`p-2 rounded-md transition-all flex justify-center group relative ${idx === 0 ? 'text-blue-600 bg-blue-50 border border-blue-100' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                        >
                            <Icon size={22} strokeWidth={1.5} />
                        </button>
                    ))}
                </div>

                <div className="mt-auto flex flex-col gap-6 w-full px-2">
                    <button className="p-2 text-slate-400 hover:text-slate-600 flex justify-center"><Settings size={22} strokeWidth={1.5} /></button>
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs text-slate-600 font-mono ring-2 ring-transparent hover:ring-slate-200 transition-all cursor-pointer">
                        JD
                    </div>
                </div>
            </div>

            {/* --- 2. CENTER PANEL (Unify Control Center) --- */}
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
                        <CenthropyLogo className="w-3 h-3" />
                        <span className="font-semibold text-slate-700 tracking-wide font-sans">Centhropy</span>
                        <ChevronRight size={12} />
                        <span>Unify</span>
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

                        {/* Financial Metrics (Focused on Capital Release) */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { label: "Capital Atrapado (Parásitos)", val: "$45.2k", delta: "-8% vs last week", neutral: false, bad: true },
                                { label: "Flujo de Caja Proyectado", val: "$12.5k", delta: "+15% if executed", neutral: false, good: true },
                                { label: "Stock Héroe (Riesgo Quiebre)", val: "12 SKUs", delta: "Critical Alert", neutral: false, critical: true },
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

                            {/* Col 1: Action Feed (Prescripciones) */}
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
                                        title="Liquidar Stock Parásito"
                                        desc="Detectados 150 items de 'Sandalias Verano 2023' sin movimiento en 90 días."
                                        impact="+$4.5k Cash"
                                    />
                                    <PrescriptionCard
                                        priority="opportunity"
                                        title="Reabastecer Héroes"
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
                                        <LayoutDashboard size={16} className="text-slate-500" /> Matriz de Rentabilidad (Ontología)
                                    </h3>
                                    <div className="flex gap-2">
                                        <div className="flex items-center gap-1 text-[10px] text-slate-500"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Héroes</div>
                                        <div className="flex items-center gap-1 text-[10px] text-slate-500"><div className="w-2 h-2 rounded-full bg-red-500"></div> Parásitos</div>
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
                            {/* Reusamos la tabla anterior pero con el contexto de Unify */}
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
                                            <td className="p-3"><span className="text-emerald-700 bg-emerald-100 px-1 rounded">HÉROE</span></td>
                                            <td className="p-3 text-right">45%</td>
                                            <td className="p-3 text-right">12</td>
                                            <td className="p-3 text-blue-600 font-bold">REABASTECER</td>
                                        </tr>
                                        <tr className="border-b border-slate-100 hover:bg-slate-50">
                                            <td className="p-3 font-medium">SKU-P1</td>
                                            <td className="p-3"><span className="text-red-700 bg-red-100 px-1 rounded">PARÁSITO</span></td>
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

            {/* --- 3. RIGHT PANEL (Cordycep Agent) --- */}
            {chatOpen && (
                <div className="w-96 border-l border-slate-200 bg-white flex flex-col z-10">

                    <div className="h-10 border-b border-slate-200 flex items-center justify-between pl-4 bg-white">
                        <div className="flex flex-col justify-center h-full pt-1 overflow-hidden">
                            <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-slate-800 whitespace-nowrap">
                                <Cpu size={14} className="text-blue-600" />
                                CORDYCEP
                            </div>
                            <div className="flex items-center gap-1 pl-6 leading-none pb-1 opacity-70">
                                <span className="text-[9px] text-slate-400 font-mono tracking-wider">by</span>
                                <CenthropyLogo className="w-2.5 h-2.5" />
                                <span className="text-[9px] text-slate-500 font-mono tracking-wider uppercase font-medium">Centhropy</span>
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
                                PROCESANDO SIMULACIÓN...
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    <div className="p-4 border-t border-slate-200 bg-white">
                        <div className="relative group">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                                className="w-full bg-slate-50 border border-slate-200 rounded-md p-3 pb-12 text-xs text-slate-800 focus:ring-1 focus:ring-blue-500 focus:border-blue-400 resize-none placeholder-slate-400 min-h-[100px] transition-all"
                                placeholder="Ej: 'Simular liquidación al 20%' o 'Ver detalle de Héroes'..."
                            ></textarea>
                            {/* Contador de caracteres - Elemento independiente */}
                            <div className="absolute bottom-3 left-3">
                                <span className={`text-[9px] font-mono transition-opacity duration-300 ${input.length > 0 ? 'opacity-40' : 'opacity-0'}`}>
                                    {input.length} chars
                                </span>
                            </div>

                            {/* Botón de envío - Elemento independiente */}
                            <div className="absolute bottom-3 right-3">
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className={`p-2 rounded transition-all flex items-center justify-center border
                                         ${input.trim()
                                            ? 'bg-slate-900 border-slate-900 text-white hover:bg-slate-800'
                                            : 'bg-slate-50 border-slate-200 text-slate-400 opacity-50 cursor-not-allowed'}`}
                                >
                                    <ArrowRight size={14} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                        <div className="mt-2 text-[10px] text-slate-500 flex justify-between font-mono">
                            <span>Unify Protocol Secure</span>
                            <span>v1.0 Beta</span>
                        </div>
                    </div>
                </div>
            )}

            {!chatOpen && (
                <div className="w-10 border-l border-slate-200 bg-white flex flex-col z-10 transition-all duration-300">
                    <button
                        onClick={() => setChatOpen(true)}
                        className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors border-b border-slate-200"
                    >
                        <PanelRightOpen size={20} />
                    </button>
                    <div
                        className="flex-1 flex flex-col items-center py-8 cursor-pointer hover:bg-slate-50/50 transition-colors"
                        onClick={() => setChatOpen(true)}
                    >
                        <div className="-rotate-90 whitespace-nowrap text-[10px] text-slate-500 tracking-[0.2em] font-mono font-bold uppercase origin-center mt-12">
                            CORDYCEP
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}