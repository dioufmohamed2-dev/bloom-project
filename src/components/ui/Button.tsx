import React from 'react';
import { Icon } from '@/components/common/Icon/Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  icon?: boolean;
  fullWidth?: boolean;
  href?: string; // If provided, renders as <a>
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  fullWidth = false,
  className = '',
  href,
  external,
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-white bg-[#14197C] hover:bg-[#0f125a] focus:ring-[#14197C] hover:shadow-md active:scale-95",
    secondary: "border-transparent text-white bg-[#3B5ADB] hover:bg-[#2a46c0] focus:ring-[#3B5ADB] hover:shadow-md active:scale-95",
    outline: "border-2 border-[#14197C] dark:border-[#3B5ADB] text-[#14197C] dark:text-[#3B5ADB] bg-transparent hover:bg-gray-50 dark:hover:bg-slate-800 focus:ring-[#14197C] active:scale-95",
    white: "border-transparent text-[#14197C] bg-white hover:bg-gray-50 focus:ring-white hover:shadow-md active:scale-95"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  const content = (
    <>
      {children}
      {icon && <Icon name="ArrowRight" className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};