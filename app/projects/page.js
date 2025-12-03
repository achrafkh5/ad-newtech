'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterButton from '@/components/projects/FilterButton';
import ProjectCard from '@/components/projects/ProjectCard';
import TechBadge from '@/components/projects/TechBadge';

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = t('projectsPage.projects');
  const filters = t('projectsPage.filters');

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Technologies list
  const technologies = [
    'React', 'Next.js', 'Vue.js', 'Angular',
    'Node.js', 'Python', 'Django', 'FastAPI',
    'Flutter', 'React Native', 'Swift', 'Kotlin',
    'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain',
    'PostgreSQL', 'MongoDB', 'Redis', 'Firebase',
    'AWS', 'Azure', 'Docker', 'Kubernetes'
  ];

  return (
    <div className={`min-h-screen bg-[#F0F5F1] dark:bg-[#1A1D1A] transition-colors duration-300 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <Navbar />

      {/* HEADER SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Organic Background Shape */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg viewBox="0 0 1440 320" className="w-full h-full">
            <path
              fill="currentColor"
              className="text-[#2D6A4F] dark:text-[#FFB703]"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5] mb-6">
            {t('projectsPage.header.title')}
          </h1>
          <p className="text-xl text-[#1A1D1A] dark:text-gray-300 leading-relaxed">
            {t('projectsPage.header.subtitle')}
          </p>
        </div>
      </section>

      {/* FILTERS SECTION */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            <FilterButton
              label={filters.all}
              isActive={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
            />
            <FilterButton
              label={filters.websites}
              isActive={activeFilter === 'websites'}
              onClick={() => setActiveFilter('websites')}
            />
            <FilterButton
              label={filters.mobile}
              isActive={activeFilter === 'mobile'}
              onClick={() => setActiveFilter('mobile')}
            />
            <FilterButton
              label={filters.desktop}
              isActive={activeFilter === 'desktop'}
              onClick={() => setActiveFilter('desktop')}
            />
            <FilterButton
              label={filters.ai}
              isActive={activeFilter === 'ai'}
              onClick={() => setActiveFilter('ai')}
            />
            <FilterButton
              label={filters.erp || 'ERP'}
              isActive={activeFilter === 'erp'}
              onClick={() => setActiveFilter('erp')}
            />
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      {activeFilter === 'all' && (
        <section className="py-12 px-6 bg-white/50 dark:bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-[#2D6A4F] dark:text-[#CAD2C5] mb-12">
              {t('projectsPage.featured.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter(project => project.featured)
                .map((project, index) => (
                  <ProjectCard key={index} project={project} isFeatured={true} />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* PROJECTS GRID SECTION */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-[#1A1D1A] dark:text-gray-300">
                No projects found in this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects
                .filter(project => !project.featured || activeFilter !== 'all')
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          )}
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="py-20 px-6 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5] mb-4">
              {t('projectsPage.technologies.title')}
            </h2>
            <p className="text-lg text-[#1A1D1A] dark:text-gray-300">
              {t('projectsPage.technologies.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <TechBadge key={index} name={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION SECTION */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Organic Background Shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F] to-[#1A1D1A] dark:from-[#2D6A4F] dark:to-[#FFB703]">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full opacity-20">
            <path
              fill="currentColor"
              className="text-white"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('projectsPage.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-10">
            {t('projectsPage.cta.subtitle')}
          </p>
          <button className="bg-[#FFB703] hover:bg-[#FFB703]/90 text-[#1A1D1A] font-bold px-10 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            {t('projectsPage.cta.button')}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
