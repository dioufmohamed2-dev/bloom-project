import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/common/Icon/Icon';

export const Vision: React.FC = () => {
  return (
    <>
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14197C] dark:text-blue-400 mb-4 sm:mb-6 leading-tight">Vision & Écosystème</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Nous ne construisons pas seulement des projets, nous bâtissons un réseau interconnecté où chaque entité renforce les autres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
           <Card className="text-center border-t-4 border-t-[#14197C] dark:border-t-[#3B5ADB]">
              <div className="mx-auto w-12 h-12 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center mb-5">
                <Icon name="Network" className="h-6 w-6 text-[#14197C] dark:text-blue-300" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Synergie</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Nos sous-projets partagent des ressources, des connaissances et des réseaux pour maximiser leur impact.
              </p>
           </Card>
           <Card className="text-center border-t-4 border-t-[#3B5ADB]">
              <div className="mx-auto w-12 h-12 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center mb-5">
                <Icon name="TrendingUp" className="h-6 w-6 text-[#3B5ADB] dark:text-blue-300" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Scalabilité</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Une architecture conçue pour accueillir de nouvelles initiatives sans déstabiliser l'existant.
              </p>
           </Card>
           <Card className="text-center border-t-4 border-t-[#14197C] dark:border-t-[#3B5ADB]">
              <div className="mx-auto w-12 h-12 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center mb-5">
                <Icon name="Globe" className="h-6 w-6 text-[#14197C] dark:text-blue-300" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Impact Global</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Une portée qui dépasse les frontières locales pour toucher une audience internationale.
              </p>
           </Card>
        </div>
      </Section>
    </>
  );
};