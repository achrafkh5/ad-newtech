'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { language, changeLanguage, t, mounted: langMounted } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only showing theme-dependent UI after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#1A1D1A]/90 backdrop-blur-md shadow-md rounded-b-3xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/newtech.png"
              alt="AD-Newtech Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5]">
              <span className="text-[#0b2e4e] dark:text-[#CAD2C5]">AD-</span ><span className="text-[#2c7ea4] dark:text-[#CAD2C5]">Newtech</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#1A1D1A] dark:text-white hover:text-[#2D6A4F] dark:hover:text-[#FFB703] font-medium transition-colors" suppressHydrationWarning>
                {t('navbar.home')}
            </Link>
            <Link href="/about" className="text-[#1A1D1A] dark:text-white hover:text-[#2D6A4F] dark:hover:text-[#FFB703] font-medium transition-colors" suppressHydrationWarning>
                {t('navbar.about')}
            </Link>
            <Link href="/services" className="text-[#1A1D1A] dark:text-white hover:text-[#2D6A4F] dark:hover:text-[#FFB703] font-medium transition-colors" suppressHydrationWarning>
                {t('navbar.services')}
            </Link>
            <Link href="/projects" className="text-[#1A1D1A] dark:text-white hover:text-[#2D6A4F] dark:hover:text-[#FFB703] font-medium transition-colors" suppressHydrationWarning>
                {t('navbar.projects')}
            </Link>
            <Link href="/contact" className="text-[#1A1D1A] dark:text-white hover:text-[#2D6A4F] dark:hover:text-[#FFB703] font-medium transition-colors" suppressHydrationWarning>
                {t('navbar.contact')}
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 bg-[#F0F5F1] dark:bg-[#2D6A4F]/20 rounded-full p-1">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  langMounted && language === 'en'
                    ? 'bg-[#2D6A4F] text-white shadow-md'
                    : 'text-[#2D6A4F] dark:text-[#CAD2C5] hover:bg-[#CAD2C5]/30'
                }`}
                suppressHydrationWarning
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('fr')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  langMounted && language === 'fr'
                    ? 'bg-[#2D6A4F] text-white shadow-md'
                    : 'text-[#2D6A4F] dark:text-[#CAD2C5] hover:bg-[#CAD2C5]/30'
                }`}
                suppressHydrationWarning
              >
                FR
              </button>
              <button
                onClick={() => changeLanguage('ar')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  langMounted && language === 'ar'
                    ? 'bg-[#2D6A4F] text-white shadow-md'
                    : 'text-[#2D6A4F] dark:text-[#CAD2C5] hover:bg-[#CAD2C5]/30'
                }`}
                suppressHydrationWarning
              >
                AR
              </button>
            </div>

            {/* Theme Mode Switcher */}
            <div className="flex items-center gap-2 bg-[#F0F5F1] dark:bg-[#2D6A4F]/20 rounded-full p-1">
              <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-full text-sm font-medium transition-all ${
                  mounted && theme === 'light'
                    ? 'bg-[#2D6A4F] text-white shadow-md'
                    : 'text-[#2D6A4F] dark:text-[#CAD2C5] hover:bg-[#CAD2C5]/30'
                }`}
                suppressHydrationWarning
                aria-label="Light mode"
                title="Light"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-full text-sm font-medium transition-all ${
                  mounted && theme === 'dark'
                    ? 'bg-[#2D6A4F] text-white shadow-md'
                    : 'text-[#2D6A4F] dark:text-[#CAD2C5] hover:bg-[#CAD2C5]/30'
                }`}
                suppressHydrationWarning
                aria-label="Dark mode"
                title="Dark"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
              <button
                onClick={() => setTheme('system')}
                className={`p-2 rounded-full text-sm font-medium transition-all ${
                  mounted && theme === 'system'
                    ? 'bg-[#2D6A4F] text-white shadow-md'
                    : 'text-[#2D6A4F] dark:text-[#CAD2C5] hover:bg-[#CAD2C5]/30'
                }`}
                suppressHydrationWarning
                aria-label="System mode"
                title="System"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
