'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Facebook } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/contact/ContactForm';
import ContactDetail from '@/components/contact/ContactDetail';

export default function ContactPage() {
  const { t, direction } = useLanguage();

  return (
    <div dir={direction} suppressHydrationWarning className="min-h-screen bg-[#F0F5F1] dark:bg-[#1A1D1A]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 lg:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#2D6A4F] bg-clip-text text-transparent dark:from-[#52B788] dark:via-[#74C69D] dark:to-[#52B788]">
            {t('contactPage.hero.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('contactPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column - Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white dark:bg-[#0D1117] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#2D6A4F] dark:text-[#52B788]">
                  {t('contactPage.details.title')}
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  <ContactDetail
                    icon={<Mail className="w-6 h-6" />}
                    label={t('contactPage.details.email.label')}
                    value={t('contactPage.details.email.value')}
                    href={`mailto:${t('contactPage.details.email.value')}`}
                  />

                  <ContactDetail
                    icon={<Phone className="w-6 h-6" />}
                    label={t('contactPage.details.phone.label')}
                    value={t('contactPage.details.phone.value')}
                    href={`tel:${t('contactPage.details.phone.value')}`}
                  />

                  <ContactDetail
                    icon={
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    }
                    label={t('contactPage.details.whatsapp.label')}
                    value={t('contactPage.details.whatsapp.value')}
                    href={`https://wa.me/${t('contactPage.details.whatsapp.value').replace(/[^0-9]/g, '')}`}
                  />

                  <ContactDetail
                    icon={<MapPin className="w-6 h-6" />}
                    label={t('contactPage.details.location.label')}
                    value={t('contactPage.details.location.value')}
                  />

                  <ContactDetail
                    icon={<Clock className="w-6 h-6" />}
                    label={t('contactPage.details.hours.label')}
                    value={t('contactPage.details.hours.value')}
                  />
                </div>

                {/* Social Media */}
                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    {t('contactPage.details.social')}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/ad-newtech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D6A4F]/10 to-[#52B788]/10 dark:from-[#52B788]/20 dark:to-[#74C69D]/20 flex items-center justify-center text-[#2D6A4F] dark:text-[#52B788] hover:scale-110 transition-transform duration-300"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="https://linkedin.com/company/ad-newtech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D6A4F]/10 to-[#52B788]/10 dark:from-[#52B788]/20 dark:to-[#74C69D]/20 flex items-center justify-center text-[#2D6A4F] dark:text-[#52B788] hover:scale-110 transition-transform duration-300"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="https://facebook.com/adnewtech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D6A4F]/10 to-[#52B788]/10 dark:from-[#52B788]/20 dark:to-[#74C69D]/20 flex items-center justify-center text-[#2D6A4F] dark:text-[#52B788] hover:scale-110 transition-transform duration-300"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white dark:bg-[#0D1117] rounded-3xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#2D6A4F]/20 to-[#52B788]/20 dark:from-[#52B788]/30 dark:to-[#74C69D]/30 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-[#2D6A4F] dark:text-[#52B788] opacity-50" />
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white dark:bg-[#0D1117] rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold mb-8 text-[#2D6A4F] dark:text-[#52B788]">
                {t('contactPage.form.title')}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
