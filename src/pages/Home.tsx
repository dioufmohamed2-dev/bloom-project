import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { SITE_CONFIG, PROJECTS } from '@/data/content';
import { Icon } from '@/components/common/Icon/Icon';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        {/* 3D Animated Background */}
        <HeroBackground />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-6 sm:mb-8 drop-shadow-lg">
              <span className="block mb-2 sm:mb-3">{SITE_CONFIG.name}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3B5ADB] to-blue-200">
                Construire demain.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl text-blue-50 sm:text-blue-100 mb-10 sm:mb-12 leading-relaxed drop-shadow-md">
              {SITE_CONFIG.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Link to="/projects">
                <Button variant="secondary" icon className="shadow-lg shadow-blue-900/50 w-full sm:w-auto">
                  Découvrir nos projets
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white/80 text-white hover:bg-white hover:text-[#14197C] backdrop-blur-sm w-full sm:w-auto">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars/Vision Teaser */}
      <Section className="relative z-10 -mt-20 pt-0 bg-transparent pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pointer-events-auto max-w-6xl mx-auto">
          <Card className="text-center shadow-lg border-t-4 border-t-[#14197C] dark:border-t-[#3B5ADB] bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
            <div className="mx-auto h-14 w-14 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
              <Icon name="Layers" className="h-7 w-7 text-[#14197C] dark:text-blue-300" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Structure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Un socle solide pour soutenir la croissance de multiples projets.</p>
          </Card>
          <Card className="text-center shadow-lg border-t-4 border-t-[#3B5ADB] bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
            <div className="mx-auto h-14 w-14 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
              <Icon name="Target" className="h-7 w-7 text-[#14197C] dark:text-blue-300" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Stratégie</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Une vision long-terme pour assurer la pérennité de nos actions.</p>
          </Card>
          <Card className="text-center shadow-lg border-t-4 border-t-[#14197C] dark:border-t-[#3B5ADB] bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
            <div className="mx-auto h-14 w-14 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
              <Icon name="Users" className="h-7 w-7 text-[#14197C] dark:text-blue-300" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Communauté</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">L'humain au cœur de chaque initiative que nous lançons.</p>
          </Card>
        </div>
      </Section>

      {/* Projects Teaser */}
      <Section background="gray">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14197C] dark:text-blue-400 mb-4">Nos Initiatives</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez les entités qui composent l'écosystème Bloom.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="h-full flex flex-col">
              <div className="flex-1">
                <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-[#14197C] dark:text-blue-300 mb-5">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <ul className="space-y-2.5 mb-8">
                  {project.features?.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      <Icon name="ArrowRight" className="h-4 w-4 text-[#3B5ADB] mr-2.5 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/projects">
                <span className="text-[#14197C] dark:text-blue-400 font-semibold hover:text-[#3B5ADB] dark:hover:text-blue-300 transition-colors flex items-center group">
                  En savoir plus <Icon name="ArrowRight" className="ml-1.5 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};