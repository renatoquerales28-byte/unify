import React from 'react';

export const CenthropyLogo = ({ className = "w-8 h-8" }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Recreación exacta del logo "Stack" de Centhropy */}
        <ellipse cx="50" cy="76" rx="42" ry="14" fill="#e2e8f0" />
        <ellipse cx="50" cy="64" rx="42" ry="14" fill="#94a3b8" />
        <ellipse cx="50" cy="52" rx="42" ry="14" fill="#475569" />
        <ellipse cx="50" cy="40" rx="42" ry="14" fill="#0f172a" />
    </svg>
);
