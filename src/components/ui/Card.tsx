import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true 
}) => {
  return (
    <div className={`
      bg-white dark:bg-slate-800 
      overflow-hidden rounded-xl 
      border border-gray-100 dark:border-slate-700
      shadow-sm
      transition-all duration-300 ease-out
      ${hoverEffect ? 'hover:shadow-md hover:-translate-y-0.5 hover:border-gray-200 dark:hover:border-slate-600' : ''}
      ${className}
    `}>
      <div className="p-6 md:p-8">
        {children}
      </div>
    </div>
  );
};