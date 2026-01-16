import React from 'react';
import { Section } from '@/components/ui/Section';
import { SITE_CONFIG } from '@/data/content';

export const Legal: React.FC = () => {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14197C] dark:text-blue-400 mb-8 sm:mb-10 leading-tight">Mentions Légales</h1>

        <div className="space-y-8 sm:space-y-10 text-gray-600 dark:text-gray-300">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">1. Édition du site</h2>
            <p className="leading-relaxed text-base sm:text-lg">
              Le présent site (ci-après le « Site »), accessible à l’URL correspondant au nom de domaine de <strong>{SITE_CONFIG.name}</strong>, est édité par la structure {SITE_CONFIG.name}.
            </p>
            <p className="mt-3 leading-relaxed text-base sm:text-lg">
              Le directeur de la publication est le représentant légal de {SITE_CONFIG.name}.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">2. Hébergement</h2>
            <p className="leading-relaxed text-base sm:text-lg">
              Ce site est hébergé sur une infrastructure cloud respectant les normes de sécurité en vigueur.
              <br />
              (Les détails spécifiques de l'hébergeur sont à compléter lors de la mise en ligne finale).
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">3. Propriété intellectuelle</h2>
            <p className="leading-relaxed text-base sm:text-lg">
              L’ensemble de ce site relève de la législation internationale sur le droit d’auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="mt-2 leading-relaxed">
              La reproduction de tout ou partie de ce site sur un support électronique quel qu’il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">4. Limitation de responsabilité</h2>
            <p className="leading-relaxed text-base sm:text-lg">
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">5. Contact</h2>
            <p className="leading-relaxed text-base sm:text-lg">
              Pour toute question relative aux mentions légales ou à l'utilisation du site, vous pouvez nous contacter via le bouton WhatsApp disponible sur la page Contact.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};