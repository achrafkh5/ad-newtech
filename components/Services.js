'use client';

import { useLanguage } from '@/context/LanguageContext';

const ServiceCard = ({ icon, title, description }) => (
  <div className="group p-6 sm:p-8 bg-white dark:bg-[#1A1D1A] rounded-2xl sm:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#CAD2C5]/20 dark:border-[#2D6A4F]/30">
    <div className="mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#2D6A4F]/10 to-[#FFB703]/10 dark:from-[#2D6A4F]/20 dark:to-[#FFB703]/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1A1D1A] dark:text-white mb-3 sm:mb-4">
      {title}
    </h3>
    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#2D6A4F] dark:text-[#CAD2C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('services.website.title'),
      description: t('services.website.description'),
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#2D6A4F] dark:text-[#CAD2C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#2D6A4F] dark:text-[#CAD2C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: t('services.desktop.title'),
      description: t('services.desktop.description'),
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#2D6A4F] dark:text-[#CAD2C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('services.ai.title'),
      description: t('services.ai.description'),
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white dark:bg-[#1A1D1A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#1A1D1A] dark:text-white mb-10 sm:mb-12 lg:mb-16">
          {t('services.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
