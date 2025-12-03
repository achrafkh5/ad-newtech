'use client';

import { useLanguage } from '@/context/LanguageContext';

const Step = ({ number, title, description }) => (
  <div className="relative flex flex-col items-center text-center p-8 bg-white dark:bg-[#1A1D1A] rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#CAD2C5]/30 dark:border-[#2D6A4F]/30">
    <div className="mb-6 w-16 h-16 bg-gradient-to-br from-[#2D6A4F] to-[#1d4d37] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
      {number}
    </div>
    <h3 className="text-xl font-bold text-[#1A1D1A] dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);

export default function HowWeWork() {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      title: t('howWeWork.step1.title'),
      description: t('howWeWork.step1.description'),
    },
    {
      number: 2,
      title: t('howWeWork.step2.title'),
      description: t('howWeWork.step2.description'),
    },
    {
      number: 3,
      title: t('howWeWork.step3.title'),
      description: t('howWeWork.step3.description'),
    },
    {
      number: 4,
      title: t('howWeWork.step4.title'),
      description: t('howWeWork.step4.description'),
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-[#1A1D1A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1D1A] dark:text-white mb-16">
          {t('howWeWork.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
