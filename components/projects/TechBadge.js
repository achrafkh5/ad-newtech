'use client';

export default function TechBadge({ name, icon }) {
  return (
    <div className="bg-[#F0F5F1] dark:bg-[#2D6A4F]/20 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Icon */}
      <div className="w-16 h-16 bg-[#2D6A4F]/10 dark:bg-[#CAD2C5]/10 rounded-xl flex items-center justify-center">
        {icon || (
          <svg className="w-10 h-10 text-[#2D6A4F] dark:text-[#CAD2C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )}
      </div>
      
      {/* Name */}
      <span className="text-sm font-semibold text-[#2D6A4F] dark:text-[#CAD2C5] text-center">
        {name}
      </span>
    </div>
  );
}
