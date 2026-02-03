import React from 'react';

export const Card = ({ children, className = "" }) => (
    <div className={`bg-white border border-slate-200 ${className}`}>
        {children}
    </div>
);

export const Badge = ({ type = "neutral", children }) => {
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
