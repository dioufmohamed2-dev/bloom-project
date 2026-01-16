import React from 'react';
import { Section } from '@/components/ui/Section';
import { VALUES } from '@/data/content';
import { Icon } from '@/components/common/Icon/Icon';

export const Values: React.FC = () => {
  return (
    <>
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14197C] dark:text-blue-400 mb-4 sm:mb-6 leading-tight">Nos Valeurs & Approche</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Ce qui guide nos décisions, structure nos projets et définit notre culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {VALUES.map((value) => (
            <div key={value.title} className="flex gap-5 sm:gap-6 p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-[#14197C] dark:bg-[#3B5ADB] flex items-center justify-center shadow-sm">
                  <Icon name={value.iconName} className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="primary" className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10 leading-tight">Une Approche Pragmatique</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-blue-50 sm:text-blue-100">
            <div className="p-5 sm:p-6 border border-blue-800/50 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-[#3B5ADB] mb-3">1.</div>
                <h4 className="font-semibold text-white mb-2 sm:mb-3 text-lg">Analyse</h4>
                <p className="text-sm leading-relaxed">Compréhension profonde des besoins et du contexte.</p>
            </div>
            <div className="p-5 sm:p-6 border border-blue-800/50 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-[#3B5ADB] mb-3">2.</div>
                <h4 className="font-semibold text-white mb-2 sm:mb-3 text-lg">Conception</h4>
                <p className="text-sm leading-relaxed">Création de solutions sur-mesure et évolutives.</p>
            </div>
            <div className="p-5 sm:p-6 border border-blue-800/50 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-[#3B5ADB] mb-3">3.</div>
                <h4 className="font-semibold text-white mb-2 sm:mb-3 text-lg">Déploiement</h4>
                <p className="text-sm leading-relaxed">Mise en œuvre agile et suivi rigoureux.</p>
            </div>
        </div>
      </Section>
    </>
  );
};