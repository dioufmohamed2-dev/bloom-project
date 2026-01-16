import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/data/content';
import { Icon } from '@/components/common/Icon/Icon';

export const Contact: React.FC = () => {
  return (
    <Section className="min-h-[70vh] flex items-center justify-center py-16 sm:py-20">
      <div className="max-w-2xl w-full mx-auto text-center px-4">
        <div className="inline-flex items-center justify-center p-4 bg-green-50 dark:bg-green-900/20 rounded-full mb-6 sm:mb-8 animate-pulse-subtle">
          <Icon name="MessageCircle" className="h-8 w-8 sm:h-10 sm:w-10 text-green-600 dark:text-green-400" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14197C] dark:text-blue-400 mb-4 sm:mb-6 leading-tight">
          Parlons de votre projet
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto">
          Pour garantir une réactivité maximale et un échange fluide, nous centralisons toutes nos prises de contact via WhatsApp.
        </p>

        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 transform transition-all hover:shadow-xl duration-300">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-6">
            Cliquez ci-dessous pour démarrer la conversation
          </h3>

          <Button
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            external
            fullWidth
            className="bg-[#25D366] hover:bg-[#1ea952] text-white text-base sm:text-lg py-4 shadow-lg shadow-green-200/50 dark:shadow-none"
            icon
          >
            Discuter sur WhatsApp
          </Button>

          <p className="mt-4 text-sm text-gray-400 dark:text-gray-500">
            Réponse généralement sous quelques heures.
          </p>
        </div>
      </div>
    </Section>
  );
};