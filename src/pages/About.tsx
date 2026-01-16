import React from 'react';
import { Section } from '@/components/ui/Section';
import { SITE_CONFIG } from '@/data/content';

export const About: React.FC = () => {
  return (
    <>
      <Section background="gray" className="border-b border-gray-200 dark:border-slate-800">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14197C] dark:text-blue-400 mb-6 leading-tight">À propos de Bloom Project</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Plus qu'une entreprise, Bloom Project est une maison mère conçue pour incuber, structurer et développer des idées transformatrices.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">Notre Histoire</h2>
            <div className="space-y-5 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Né de la volonté de créer un écosystème cohérent pour des initiatives variées, Bloom Project s'est imposé comme une structure centrale garantissant la qualité et la vision de ses filiales.
              </p>
              <p>
                Nous croyons que la réussite ne se construit pas en solitaire, mais en créant des ponts entre différents domaines d'expertise : le digital, la communauté, et l'entrepreneuriat.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-w-4 aspect-h-3 rounded-2xl bg-gradient-to-br from-[#14197C] to-[#3B5ADB] shadow-xl p-1">
                <div className="h-full w-full bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center p-8">
                    <span className="text-[#14197C] dark:text-blue-300 font-bold text-2xl text-center">
                        {SITE_CONFIG.tagline}
                    </span>
                </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3B5ADB]/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </Section>

      <Section background="primary">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Notre Mission</h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-light text-blue-50 sm:text-blue-100 italic leading-relaxed">
            "Fournir le terreau fertile nécessaire pour que chaque projet ambitieux puisse germer, grandir et fleurir durablement."
          </p>
        </div>
      </Section>
    </>
  );
};