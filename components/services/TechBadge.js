'use client';

export default function TechBadge({ name, category }) {
  return (
    <div className="group px-6 py-3 bg-gradient-to-br from-white to-[#F0F5F1] dark:from-[#1A1D1A] dark:to-[#2D6A4F]/10 rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-[#CAD2C5]/30 dark:border-[#2D6A4F]/30 hover:scale-105 transform">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#2D6A4F] dark:bg-[#FFB703] group-hover:animate-pulse"></div>
        <span className="text-sm font-semibold text-[#1A1D1A] dark:text-white">
          {name}
        </span>
      </div>
    </div>
  );
}
