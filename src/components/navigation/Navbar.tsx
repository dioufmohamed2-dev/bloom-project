import React, { useState } from 'react';
import { Logo } from '@/components/common/Logo/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { Icon } from '@/components/common/Icon/Icon';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm dark:shadow-slate-800 fixed w-full z-50 transition-all duration-300 border-b border-gray-100 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Logo onClick={closeMenu} />
          </div>

          {/* Desktop Menu */}
          <DesktopMenu />

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-[#14197C] dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B5ADB]"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <Icon name={isOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </nav>
  );
};