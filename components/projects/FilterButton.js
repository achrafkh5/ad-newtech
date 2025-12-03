'use client';

export default function FilterButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
        isActive
          ? 'bg-[#FFB703] text-[#1A1D1A] shadow-lg scale-105'
          : 'bg-[#F0F5F1] dark:bg-[#2D6A4F]/20 text-[#2D6A4F] dark:text-[#CAD2C5] hover:bg-[#CAD2C5]/30 dark:hover:bg-[#2D6A4F]/40'
      }`}
    >
      {label}
    </button>
  );
}
