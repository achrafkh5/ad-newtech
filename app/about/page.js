'use client';

import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RoleCard from '@/components/about/RoleCard';
import MissionVisionCard from '@/components/about/MissionVisionCard';
import TimelineStep from '@/components/about/TimelineStep';

export default function AboutPage() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-[#F0F5F1] dark:bg-[#1A1D1A] transition-colors duration-300 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 overflow-hidden">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5] mb-4 sm:mb-6">
            {t('aboutPage.hero.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#1A1D1A] dark:text-gray-300 leading-relaxed">
            {t('aboutPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5]">
                {t('aboutPage.overview.title')}
              </h2>
              <p className="text-base sm:text-lg text-[#1A1D1A] dark:text-gray-300 leading-relaxed">
                {t('aboutPage.overview.description')}
              </p>
              
              {/* Core Values */}
              <ul className="space-y-3">
                {t('aboutPage.overview.values').map((value, index) => (
                  <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="w-6 h-6 text-[#FFB703]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#1A1D1A] dark:text-gray-300">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Illustration */}
            <div className="bg-[#2D6A4F]/10 dark:bg-[#CAD2C5]/5 rounded-3xl p-12 flex items-center justify-center">
              <svg className="w-full h-64 text-[#2D6A4F] dark:text-[#CAD2C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <MissionVisionCard
              title={t('aboutPage.mission.title')}
              description={t('aboutPage.mission.description')}
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
            <MissionVisionCard
              title={t('aboutPage.vision.title')}
              description={t('aboutPage.vision.description')}
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* TEAM ROLES SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#2D6A4F] dark:text-[#CAD2C5] mb-10 sm:mb-12 lg:mb-16">
            {t('aboutPage.expertise.title')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t('aboutPage.expertise.roles').map((role, index) => (
              <RoleCard
                key={index}
                title={role.title}
                description={role.description}
                icon={
                  index === 0 ? (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ) : index === 1 ? (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Organic Background Shape */}
        <div className="absolute bottom-0 right-0 w-full h-full opacity-5">
          <svg viewBox="0 0 1440 320" className="w-full h-full">
            <path
              fill="currentColor"
              className="text-[#2D6A4F]"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#2D6A4F] dark:text-[#CAD2C5] mb-8 sm:mb-10 lg:mb-12">
            {t('aboutPage.whyChoose.title')}
          </h2>
          
          <div className="bg-[#F0F5F1] dark:bg-[#2D6A4F]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
            <ul className="space-y-3 sm:space-y-4">
              {t('aboutPage.whyChoose.reasons').map((reason, index) => (
                <li key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                  <svg className="w-6 h-6 text-[#FFB703] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-[#1A1D1A] dark:text-gray-300">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WORK PROCESS SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#2D6A4F] dark:text-[#CAD2C5] mb-10 sm:mb-12 lg:mb-16">
            {t('aboutPage.process.title')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4">
            {t('aboutPage.process.steps').map((step, index) => (
              <TimelineStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === t('aboutPage.process.steps').length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('aboutPage.cta.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10">
            {t('aboutPage.cta.subtitle')}
          </p>
          <button className="w-full sm:w-auto bg-[#FFB703] hover:bg-[#FFB703]/90 text-[#1A1D1A] font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            {t('aboutPage.cta.button')}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
