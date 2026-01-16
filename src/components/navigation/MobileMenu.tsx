import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION, SITE_CONFIG } from '@/data/content';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {NAVIGATION.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50 dark:bg-slate-800 text-[#3B5ADB] dark:text-[#3B5ADB] font-semibold border-l-4 border-[#3B5ADB]'
                  : 'text-gray-700 dark:text-gray-300 hover:text-[#14197C] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800'
              }`
            }
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {item.label}
          </NavLink>
        ))}
        <a
          href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center mt-4 px-5 py-3 rounded-md bg-[#14197C] dark:bg-[#3B5ADB] text-white font-medium transition-colors"
        >
          Discuter sur WhatsApp
        </a>
      </div>
    </div>
  );
};
