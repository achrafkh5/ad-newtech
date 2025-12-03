'use client';

import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import HowWeWork from '@/components/HowWeWork';
import Footer from '@/components/Footer';

export default function Home() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-[#F0F5F1] dark:bg-[#1A1D1A] transition-colors duration-300 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <HowWeWork />
      </main>
      <Footer />
    </div>
  );
}
