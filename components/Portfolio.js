'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
const ProjectCard = ({ title, description }) => (
  <div className="bg-gradient-to-br from-white to-[#F0F5F1] dark:from-[#1A1D1A] dark:to-[#2D6A4F]/10 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#CAD2C5]/30 dark:border-[#2D6A4F]/30">
    <div className="mb-6 w-full h-48 bg-gradient-to-br from-[#2D6A4F]/20 to-[#FFB703]/20 dark:from-[#2D6A4F]/30 dark:to-[#FFB703]/30 rounded-2xl flex items-center justify-center">
      <svg className="w-20 h-20 text-[#2D6A4F] dark:text-[#CAD2C5] opacity-50" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-[#1A1D1A] dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);

export default function Portfolio() {
  const { t } = useLanguage();

  // Get real projects from translations
  const allProjects = t('projectsPage.projects');
  
  // Show first 3 projects (featured ones first)
  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 2);
  const otherProjects = allProjects.filter(p => !p.featured).slice(0, 1);
  const projects = [...featuredProjects, ...otherProjects].slice(0, 3);

  return (
    <section className="py-20 px-6 bg-[#F0F5F1] dark:bg-[#0F110F]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1D1A] dark:text-white mb-16">
          {t('portfolio.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} />
          ))}
        </div>
        <div className="text-center">
            <Link href="/projects">
          <button className="px-10 py-4 bg-[#FFB703] hover:bg-[#E6A603] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            {t('portfolio.viewAll')}
          </button>
            </Link>
        </div>
      </div>
    </section>
  );
}
