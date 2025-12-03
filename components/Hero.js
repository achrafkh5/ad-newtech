'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F0F5F1] via-white to-[#CAD2C5]/20 dark:from-[#1A1D1A] dark:via-[#1A1D1A] dark:to-[#2D6A4F]/10">
      {/* Organic background shape */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2D6A4F]/10 dark:bg-[#2D6A4F]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFB703]/10 dark:bg-[#FFB703]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1D1A] dark:text-white leading-tight">
            {t('hero.headline')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('hero.subtext')}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-[#2D6A4F] hover:bg-[#235740] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              {t('hero.ctaQuote')}
            </button>
            <Link href="/services">
              <button className="px-8 py-4 border-2 border-[#2D6A4F] text-[#2D6A4F] dark:border-[#CAD2C5] dark:text-[#CAD2C5] hover:bg-[#2D6A4F] hover:text-white dark:hover:bg-[#CAD2C5] dark:hover:text-[#1A1D1A] rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                {t('hero.ctaWork')}
              </button>
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative">
          <div className="w-full h-[400px] bg-gradient-to-br from-[#2D6A4F]/20 to-[#FFB703]/20 dark:from-[#2D6A4F]/30 dark:to-[#FFB703]/30 rounded-[3rem] shadow-2xl flex items-center justify-center backdrop-blur-sm">
            <svg className="w-64 h-64 text-[#2D6A4F] dark:text-[#CAD2C5] opacity-80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
