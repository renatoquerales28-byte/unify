import React from 'react';
import { Database, Cpu, Layers, GitBranch, ArrowRight } from 'lucide-react';

export const OrgSelectorView = ({ setActiveOrg, activeOrg, onSelect }) => {
    const orgs = [
        { name: 'Centhropy Global', type: 'Holding / Inversiones', icon: <Database />, desc: 'Gestión central de patrimonio.' },
        { name: 'TechCorp Solutions', type: 'Sucursal Tecnológica', icon: <Cpu />, desc: 'Desarrollo e infraestructura.' },
        { name: 'Retail Group MX', type: 'Empresa Minorista', icon: <Layers />, desc: 'Control de inventario México.' },
        { name: 'LogisTech S.A.', type: 'Operadora Logística', icon: <GitBranch />, desc: 'Optimización de rutas y flota.' }
    ];

    return (
        <div className="flex-1 flex flex-col bg-[#f8fafc] animate-in fade-in duration-300 overflow-y-auto">
            <div className="max-w-4xl mx-auto w-full py-10 px-6">
                <div className="mb-8 border-l-2 border-blue-600 pl-5">
                    <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-blue-600 uppercase">System Context / Identity</span>
                    <h2 className="text-2xl font-light text-slate-900 mt-1 tracking-tight uppercase">Seleccionar Entidad</h2>
                    <p className="text-slate-500 mt-1 max-w-md text-[11px] font-mono opacity-60">
                        [ROOT_ACCESS] Sincronización de unidad operativa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {orgs.map((org) => (
                        <button
                            key={org.name}
                            onClick={() => {
                                setActiveOrg(org.name);
                                onSelect();
                            }}
                            className={`group text-left p-4 border transition-all duration-200 flex flex-col gap-3 relative
                            ${activeOrg === org.name
                                    ? 'bg-white border-blue-500'
                                    : 'bg-white border-slate-200 hover:border-slate-400 hover:bg-slate-50'}`}
                        >
                            <div className={`w-9 h-9 flex items-center justify-center border
                            ${activeOrg === org.name ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
                                {React.cloneElement(org.icon, { size: 18, strokeWidth: 1.5 })}
                            </div>

                            <div>
                                <h3 className="text-base font-medium text-slate-900 tracking-tight leading-tight">{org.name}</h3>
                                <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-0.5 block">
                                    {org.type}
                                </span>
                                <p className="text-[10px] text-slate-500 mt-2 leading-tight font-mono opacity-70">
                                    {org.desc}
                                </p>
                            </div>

                            <div className="mt-auto pt-3 flex items-center justify-between text-[9px] font-bold uppercase tracking-widest">
                                <span className={activeOrg === org.name ? 'text-blue-600' : 'text-slate-400 opacity-0 group-hover:opacity-100'}>
                                    {activeOrg === org.name ? 'Activa' : 'Sincronizar'}
                                </span>
                                <ArrowRight size={10} className={activeOrg === org.name ? 'text-blue-600' : 'text-slate-300'} />
                            </div>
                        </button>
                    ))}

                    <button className="p-4 border border-dashed border-slate-300 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-slate-400 hover:text-slate-600 transition-all bg-slate-50/50">
                        <div className="w-7 h-7 border border-dashed border-slate-300 flex items-center justify-center text-lg font-light">
                            +
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-widest">Añadir Entidad</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
