'use client';

import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/services/SectionHeader';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceDetail from '@/components/services/ServiceDetail';
import TechBadge from '@/components/services/TechBadge';

export default function ServicesPage() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  // Service cards data
  const serviceCards = [
    {
      icon: (
        <svg className="w-10 h-10 text-[#2D6A4F] dark:text-[#CAD2C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('servicesPage.serviceCards.website.title'),
      description: t('servicesPage.serviceCards.website.description'),
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#2D6A4F] dark:text-[#CAD2C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: t('servicesPage.serviceCards.mobile.title'),
      description: t('servicesPage.serviceCards.mobile.description'),
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#2D6A4F] dark:text-[#CAD2C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: t('servicesPage.serviceCards.desktop.title'),
      description: t('servicesPage.serviceCards.desktop.description'),
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#2D6A4F] dark:text-[#CAD2C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('servicesPage.serviceCards.ai.title'),
      description: t('servicesPage.serviceCards.ai.description'),
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#2D6A4F] dark:text-[#CAD2C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: t('servicesPage.serviceCards.customTools.title'),
      description: t('servicesPage.serviceCards.customTools.description'),
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#2D6A4F] dark:text-[#CAD2C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: t('servicesPage.serviceCards.integrations.title'),
      description: t('servicesPage.serviceCards.integrations.description'),
    },
  ];

  // Service details data
  const serviceDetails = [
    {
      title: t('servicesPage.details.website.title'),
      description: t('servicesPage.details.website.description'),
      features: t('servicesPage.details.website.features'),
    },
    {
      title: t('servicesPage.details.mobile.title'),
      description: t('servicesPage.details.mobile.description'),
      features: t('servicesPage.details.mobile.features'),
    },
    {
      title: t('servicesPage.details.desktop.title'),
      description: t('servicesPage.details.desktop.description'),
      features: t('servicesPage.details.desktop.features'),
    },
    {
      title: t('servicesPage.details.ai.title'),
      description: t('servicesPage.details.ai.description'),
      features: t('servicesPage.details.ai.features'),
    },
  ];

  // Technologies data
  const technologies = {
    frontend: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'TypeScript'],
    backend: ['Node.js', 'Python', 'Django', 'FastAPI', 'Express'],
    mobile: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    ai: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face'],
    database: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
  };

  return (
    <div className={`min-h-screen bg-[#F0F5F1] dark:bg-[#1A1D1A] transition-colors duration-300 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <Navbar />
      
      <main>
        {/* Header Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F0F5F1] via-white to-[#CAD2C5]/20 dark:from-[#1A1D1A] dark:via-[#1A1D1A] dark:to-[#2D6A4F]/10">
          {/* Organic background shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2D6A4F]/10 dark:bg-[#2D6A4F]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFB703]/10 dark:bg-[#FFB703]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1A1D1A] dark:text-white leading-tight mb-6">
              {t('servicesPage.header.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t('servicesPage.header.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-white dark:bg-[#1A1D1A]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCards.map((service, index) => (
                <ServiceCard key={index} {...service} delay={index * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* Service Details Sections */}
        <section className="py-20 px-6 bg-[#F0F5F1] dark:bg-[#0F110F]">
          <div className="max-w-7xl mx-auto">
            {serviceDetails.map((detail, index) => (
              <ServiceDetail 
                key={index} 
                {...detail} 
                index={index}
                imagePosition={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-6 bg-white dark:bg-[#1A1D1A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title={t('servicesPage.technologies.title')}
              subtitle={t('servicesPage.technologies.subtitle')}
            />

            <div className="space-y-12">
              {/* Frontend */}
              <div>
                <h3 className="text-2xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5] mb-6">
                  {t('servicesPage.technologies.frontend')}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.frontend.map((tech, index) => (
                    <TechBadge key={index} name={tech} category="frontend" />
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-2xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5] mb-6">
                  {t('servicesPage.technologies.backend')}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.backend.map((tech, index) => (
                    <TechBadge key={index} name={tech} category="backend" />
                  ))}
                </div>
              </div>

              {/* Mobile */}
              <div>
                <h3 className="text-2xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5] mb-6">
                  {t('servicesPage.technologies.mobile')}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.mobile.map((tech, index) => (
                    <TechBadge key={index} name={tech} category="mobile" />
                  ))}
                </div>
              </div>

              {/* AI & ML */}
              <div>
                <h3 className="text-2xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5] mb-6">
                  {t('servicesPage.technologies.ai')}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.ai.map((tech, index) => (
                    <TechBadge key={index} name={tech} category="ai" />
                  ))}
                </div>
              </div>

              {/* Database */}
              <div>
                <h3 className="text-2xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5] mb-6">
                  {t('servicesPage.technologies.database')}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.database.map((tech, index) => (
                    <TechBadge key={index} name={tech} category="database" />
                  ))}
                </div>
              </div>

              {/* Cloud */}
              <div>
                <h3 className="text-2xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5] mb-6">
                  {t('servicesPage.technologies.cloud')}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.cloud.map((tech, index) => (
                    <TechBadge key={index} name={tech} category="cloud" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-[#2D6A4F] to-[#1d4d37] dark:from-[#1A1D1A] dark:to-[#0F110F]">
          {/* Organic background shapes */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FFB703]/20 dark:bg-[#FFB703]/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#CAD2C5]/20 dark:bg-[#CAD2C5]/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/3"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('servicesPage.cta.title')}
            </h2>
            <p className="text-xl text-[#CAD2C5] mb-10 leading-relaxed">
              {t('servicesPage.cta.subtitle')}
            </p>
            <button className="px-12 py-5 bg-[#FFB703] hover:bg-[#E6A603] text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110">
              {t('servicesPage.cta.button')}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
