'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F0F5F1] via-white to-[#CAD2C5]/20 dark:from-[#1A1D1A] dark:via-[#1A1D1A] dark:to-[#2D6A4F]/10">
      {/* Organic background shape */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-[#2D6A4F]/10 dark:bg-[#2D6A4F]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-[#FFB703]/10 dark:bg-[#FFB703]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1D1A] dark:text-white leading-tight">
            {t('hero.headline')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('hero.subtext')}
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#2D6A4F] hover:bg-[#235740] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              {t('hero.ctaQuote')}
            </button>
            <Link href="/services">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#2D6A4F] text-[#2D6A4F] dark:border-[#CAD2C5] dark:text-[#CAD2C5] hover:bg-[#2D6A4F] hover:text-white dark:hover:bg-[#CAD2C5] dark:hover:text-[#1A1D1A] rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                {t('hero.ctaWork')}
              </button>
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative mt-8 lg:mt-0">
          <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-[#2D6A4F]/20 to-[#FFB703]/20 dark:from-[#2D6A4F]/30 dark:to-[#FFB703]/30 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] shadow-2xl flex items-center justify-center backdrop-blur-sm">
            <svg className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 text-[#2D6A4F] dark:text-[#CAD2C5] opacity-80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
