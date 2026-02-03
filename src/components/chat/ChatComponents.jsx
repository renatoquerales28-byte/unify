import React, { useEffect } from 'react';
import { Database, Send, X, Maximize2, Sparkles, Command, ArrowRight } from 'lucide-react';

export const ChatMessage = ({ message }) => {
    const isUser = message.role === 'user';

    return (
        <div className={`flex w-full mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] ${isUser ? 'ml-4' : 'mr-4'}`}>
                <div className={`flex items-center gap-2 mb-1 text-[10px] text-slate-500 font-mono uppercase tracking-wide ${isUser ? 'justify-end' : 'justify-start'}`}>
                    {!isUser && (
                        <div className="flex items-center gap-1.5">
                            <span className="text-blue-600 font-bold">CORDYCEP</span>
                            <span className="text-slate-500 text-[9px] border px-0.5 border-slate-300 rounded-sm">AI</span>
                        </div>
                    )}
                    <span>{message.timestamp}</span>
                </div>

                <div className={`
          p-3 rounded-md border text-sm relative group
          ${isUser
                        ? 'bg-blue-50 border-blue-200 text-slate-800'
                        : 'bg-white border-slate-200 text-slate-700'}
        `}>
                    {message.content}

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

export const ChatPanel = ({ messages, input, setInput, handleSend, chatOpen, setChatOpen, chatEndRef, textareaRef, isTyping }) => {
    return (
        <div className={`w-80 border-l border-slate-200 bg-white flex flex-col transition-all duration-300 overflow-hidden ${chatOpen ? 'mr-0 opacity-100' : '-mr-80 opacity-0'}`}>
            <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
                <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-blue-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Cordycep AI</span>
                </div>
                <div className="flex gap-2">
                    <button className="text-slate-400 hover:text-slate-600 transition-colors">
                        <Maximize2 size={12} />
                    </button>
                    <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                        <X size={14} />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed opacity-95">
                {messages.map((m, i) => (
                    <ChatMessage key={i} message={m} />
                ))}
                {isTyping && (
                    <div className="flex gap-1 mb-4">
                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                )}
                <div ref={chatEndRef} />
            </div>

            <div className="p-4 border-t border-slate-200 bg-white shadow-[0_-4px_12px_-4px_rgba(0,0,0,0.05)]">
                <div className="relative group">
                    <textarea
                        ref={textareaRef}
                        rows="1"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        placeholder="Preguntar a Cordycep..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-3 pr-10 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500/50 focus:bg-white transition-all resize-none max-h-32"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim()}
                        className={`absolute right-1.5 top-1.5 w-7 h-7 rounded-md flex items-center justify-center transition-all
                            ${input.trim()
                                ? 'bg-slate-900 text-white hover:bg-black shadow-md'
                                : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}
                    >
                        <ArrowRight size={14} strokeWidth={2.5} />
                    </button>
                </div>
                <div className="mt-2 flex items-center justify-between text-[8px] font-mono text-slate-400 uppercase tracking-widest px-1">
                    <div className="flex items-center gap-1">
                        <Command size={8} />
                        <span>Enter para enviar</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
