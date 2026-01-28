import React from 'react';

/**
 * Las 'Props' son el equivalente a los @Input() en Angular.
 * Definimos qué datos necesita este componente para funcionar.
 */
interface StatsCardProps {
    title: string;
    value: string | number;
    icon: string;
    colorClass: string; // Ejemplo: 'blue', 'orange', 'yellow', 'green'
    growth?: number;    // Opcional
}

// Mapa de colores para mantener la consistencia sin repetir clases de Tailwind
// Mapa de colores con soporte para modo oscuro
const colorMap: Record<string, { bg: string, text: string }> = {
    blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-500 dark:text-blue-400' },
    orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-500 dark:text-orange-400' },
    yellow: { bg: 'bg-yellow-50 dark:bg-yellow-900/20', text: 'text-yellow-500 dark:text-yellow-400' },
    green: { bg: 'bg-green-50 dark:bg-green-900/20', text: 'text-green-500 dark:text-green-400' },
    brand: { bg: 'bg-brand-50 dark:bg-brand-900/20', text: 'text-brand-500 dark:text-brand-400' },
};

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, colorClass, growth }) => {
    const colors = colorMap[colorClass] || colorMap.blue;

    return (
        <div className="bg-surface dark:bg-surface p-6 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center`}>
                    <i className={`pi ${icon} text-xl`}></i>
                </div>
                {growth !== undefined && (
                    <span className="text-green-500 dark:text-green-400 text-sm font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                        +{growth}%
                    </span>
                )}
            </div>
            <div className="text-sm text-gray-400 dark:text-gray-500 font-sans uppercase tracking-widest font-bold">
                {title}
            </div>
            <div className="text-4xl font-black text-text dark:text-text mt-1 font-sans">
                {value}
            </div>
        </div>
    );
};
