import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION, SITE_CONFIG } from '@/data/content';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const DesktopMenu: React.FC = () => {
  return (
    <div className="hidden md:flex md:items-center md:space-x-8">
      {NAVIGATION.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `relative text-sm font-medium transition-all duration-300 px-2 py-1 ${
              isActive
                ? 'text-[#3B5ADB] dark:text-[#3B5ADB] font-semibold'
                : 'text-gray-600 dark:text-gray-300 hover:text-[#14197C] dark:hover:text-white'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B5ADB] dark:bg-[#3B5ADB] rounded-full" />
              )}
            </>
          )}
        </NavLink>
      ))}

      <div className="h-6 w-px bg-gray-300 dark:bg-slate-700 mx-2"></div>

      <ThemeToggle />

      <a
        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2.5 rounded-full bg-[#14197C] hover:bg-[#0f125a] dark:bg-[#3B5ADB] dark:hover:bg-[#2a46c0] text-white text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95"
      >
        Contact
      </a>
    </div>
  );
};

