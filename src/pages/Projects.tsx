import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { PROJECTS } from '@/data/content';
import { Icon } from '@/components/common/Icon/Icon';

export const Projects: React.FC = () => {
  return (
    <>
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14197C] dark:text-blue-400 mb-4 sm:mb-6 leading-tight">Nos Sous-Projets</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Découvrez les entités spécialisées qui donnent vie à la vision Bloom Project.
          </p>
        </div>
      </Section>

      <Section>
        <div className="space-y-16 lg:space-y-20">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                    <span className="h-px w-12 bg-[#3B5ADB]"></span>
                    <span className="text-[#3B5ADB] dark:text-[#3B5ADB] font-bold uppercase tracking-wider text-sm">{project.category}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">{project.title}</h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                </p>
                
                <div className="pt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Points clés :</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features?.map((feature) => (
                            <div key={feature} className="flex items-start text-gray-700 dark:text-gray-400 leading-relaxed">
                                <Icon name="CheckCircle2" className="h-5 w-5 text-[#3B5ADB] mr-2.5 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
              </div>

              {/* Visual Side (Abstract representation since no images) */}
              <div className="flex-1 w-full">
                <Card className="h-full min-h-[300px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border-none shadow-inner">
                    <div className="text-center p-8">
                        <div className="text-6xl font-black text-[#14197C]/10 dark:text-white/10 mb-4">
                            {project.title.split(' ')[1] || project.title.charAt(0)}
                        </div>
                        <p className="text-sm text-gray-400 dark:text-gray-500 font-medium uppercase tracking-widest">
                            {project.title}
                        </p>
                    </div>
                </Card>
              </div>

            </div>
          ))}
        </div>
      </Section>
    </>
  );
};