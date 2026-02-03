import React, { useState, useEffect, useRef } from 'react';
import {
    LayoutDashboard,
    Settings,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    Zap,
    Sparkles,
    Building2
} from 'lucide-react';

// Views
import { OrgSelectorView } from './components/views/OrgSelectorView';
import { DashboardView } from './components/views/DashboardView';
import { DataCoreView } from './components/views/DataCoreView';

export default function App() {
    // Navigation State
    const [activeView, setActiveView] = useState('organizations'); // 'organizations' | 'dashboard' | 'datacore'
    const [activeOrg, setActiveOrg] = useState('Centhropy Global');

    // Dashboard & Chat States
    const [chatOpen, setChatOpen] = useState(true);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);
    const textareaRef = useRef(null);

    // Auto-resize logic para el textarea del Dashboard
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [input]);

    // Mock State
    const [dashboardData] = useState({
        title: "Unify Control Center",
        status: "Mode: Prescriptive",
        lastUpdated: "Now"
    });

    const [messages, setMessages] = useState([
        {
            role: 'agent',
            content: 'Unify Protocol completado. \n\nHe detectado $45,000 en capital atrapado en inventario "Inmovilizado" (baja rotación, bajo margen). Al mismo tiempo, tus productos de "Alta Demanda" en la categoría Sneakers tienen riesgo de quiebre de stock en 12 días.\n\nHe preparado un plan de liquidación para liberar flujo de caja inmediato.',
            timestamp: '10:02 AM',
            lineage: "Shopify API + ERP Odoo",
            actions: [
                { label: "Ver Plan de Liquidación", icon: <ArrowDownRight size={10} />, primary: true },
                { label: "Analizar Alta Demanda", icon: <ArrowUpRight size={10} />, primary: false }
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

        setTimeout(() => {
            const agentMsg = {
                role: 'agent',
                content: `Ejecutando simulación de precio... \n\nSi aplicas un descuento del 15% a los items de baja rotación de la Categoría Z, proyectamos una recuperación de $12,500 en flujo de caja esta semana. El margen global bajará un 0.4%, pero ganarás liquidez crítica.`,
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

            {/* --- 1. LEFT SIDEBAR (Activity Bar) - COMÚN PARA TODAS LAS VISTAS --- */}
            <div className="w-16 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col items-center py-4 z-20">
                <div className="mb-6 group relative w-full flex justify-center px-2">
                    <div className="w-10 h-10 flex items-center justify-center cursor-default bg-slate-50 border border-slate-100 rounded-sm hover:border-slate-200 transition-all">
                        <img src="/Centhronpy_13.png" alt="Centhropy" className="w-8 h-8 object-contain opacity-80" />
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full items-center mt-2">
                    {/* Switcher de Identidad */}
                    <div className="relative w-full flex justify-center group">
                        {activeView === 'organizations' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-blue-600 rounded-r-full" />}
                        <button
                            onClick={() => setActiveView('organizations')}
                            className={`p-2.5 rounded-sm transition-all flex justify-center relative
                            ${activeView === 'organizations' ? 'text-blue-600 bg-blue-50/50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                        >
                            <Building2 size={22} strokeWidth={1.2} />
                        </button>
                        <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 whitespace-nowrap border border-slate-700 pointer-events-none transition-opacity z-50 font-mono tracking-wider">
                            ORGANIZACIONES
                        </div>
                    </div>

                    {/* Botón Dashboard */}
                    <div className="relative w-full flex justify-center group">
                        {activeView === 'dashboard' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-blue-600 rounded-r-full" />}
                        <button
                            onClick={() => setActiveView('dashboard')}
                            className={`p-2.5 rounded-sm transition-all flex justify-center relative 
                            ${activeView === 'dashboard' ? 'text-blue-600 bg-blue-50/50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                        >
                            <LayoutDashboard size={22} strokeWidth={1.2} />
                        </button>
                        <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 whitespace-nowrap border border-slate-700 pointer-events-none transition-opacity z-50 font-mono tracking-wider">
                            DASHBOARD
                        </div>
                    </div>

                    {/* Data Core */}
                    <div className="relative w-full flex justify-center group">
                        {activeView === 'datacore' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-blue-600 rounded-r-full" />}
                        <button
                            onClick={() => setActiveView('datacore')}
                            className={`p-2.5 rounded-sm transition-all flex justify-center relative 
                            ${activeView === 'datacore' ? 'text-blue-600 bg-blue-50/50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                        >
                            <Sparkles size={22} strokeWidth={1.2} />
                        </button>
                        <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 whitespace-nowrap border border-slate-700 pointer-events-none transition-opacity z-50 font-mono tracking-wider">
                            DATA CORE ⌘
                        </div>
                    </div>
                </div>

                <div className="mt-auto flex flex-col gap-4 w-full items-center mb-4">
                    <button className="p-2.5 text-slate-400 hover:text-slate-600 flex justify-center transition-colors">
                        <Settings size={20} strokeWidth={1.2} />
                    </button>
                    <div className="w-9 h-9 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center text-[10px] text-slate-600 font-mono hover:border-slate-300 transition-all cursor-pointer font-bold">
                        JB
                    </div>
                </div>
            </div>

            {/* --- CONTENIDO PRINCIPAL CON SELECTOR DE VISTAS --- */}
            {activeView === 'organizations' && (
                <OrgSelectorView
                    setActiveOrg={setActiveOrg}
                    activeOrg={activeOrg}
                    onSelect={() => setActiveView('dashboard')}
                />
            )}

            {activeView === 'dashboard' && (
                <DashboardView
                    dashboardData={{ ...dashboardData, title: `${activeOrg} Control Center` }}
                    messages={messages}
                    input={input}
                    setInput={setInput}
                    handleSend={handleSend}
                    chatOpen={chatOpen}
                    setChatOpen={setChatOpen}
                    chatEndRef={chatEndRef}
                    textareaRef={textareaRef}
                    isTyping={isTyping}
                />
            )}

            {activeView === 'datacore' && (
                <DataCoreView />
            )}

        </div>
    );
}
