import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white'
}) => {
  
  const bgColors = {
    white: 'bg-white dark:bg-slate-900',
    gray: 'bg-gray-50 dark:bg-slate-950',
    primary: 'bg-[#14197C] dark:bg-[#0a0d4a] text-white'
  };

  return (
    <section id={id} className={`py-16 md:py-20 lg:py-28 transition-colors duration-300 ${bgColors[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};