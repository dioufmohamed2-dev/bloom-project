import React from 'react';
import { NavLink } from 'react-router-dom';
import { SITE_CONFIG, NAVIGATION } from '@/data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14197C] text-white">
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-xl sm:text-2xl font-bold tracking-tight">{SITE_CONFIG.name}</span>
            <p className="text-blue-100/90 max-w-sm text-sm leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-blue-200 tracking-wider uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path} 
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Minimal) */}
          <div>
            <h3 className="text-sm font-semibold text-blue-200 tracking-wider uppercase mb-5">
              Contact
            </h3>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed">
              Nous privilégions une communication directe et efficace.
            </p>
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#3B5ADB] hover:text-white font-medium transition-colors duration-200 text-sm sm:text-base"
            >
              Nous contacter via WhatsApp &rarr;
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#3B5ADB]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm sm:text-base text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
          <NavLink 
            to="/legal" 
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Mentions Légales
          </NavLink>
        </div>
      </div>
    </footer>
  );
};