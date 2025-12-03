'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ProjectCard({ project, isFeatured = false }) {
  const { t } = useLanguage();

  return (
    <div className={`bg-[#F0F5F1] dark:bg-[#2D6A4F]/20 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${isFeatured ? 'md:col-span-2' : ''}`}>
      {/* Featured Badge */}
      {isFeatured && (
        <div className="bg-[#FFB703] text-[#1A1D1A] px-4 py-2 text-sm font-bold inline-block">
          {t('projectsPage.featured.badge')}
        </div>
      )}

      {/* Project Image Placeholder */}
      <div className="w-full h-64 bg-gradient-to-br from-[#2D6A4F] to-[#CAD2C5] dark:from-[#1A1D1A] dark:to-[#2D6A4F] flex items-center justify-center">
        <svg className="w-24 h-24 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#1A1D1A] dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#2D6A4F]/10 dark:bg-[#CAD2C5]/10 text-[#2D6A4F] dark:text-[#CAD2C5] text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <button className="w-full bg-[#FFB703] hover:bg-[#FFB703]/90 text-[#1A1D1A] font-bold py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md">
          {t('projectsPage.viewDetails')}
        </button>
      </div>
    </div>
  );
}
