'use client';

export default function MissionVisionCard({ title, description, icon }) {
  return (
    <div className="bg-[#F0F5F1] dark:bg-[#2D6A4F]/20 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex flex-col space-y-4">
        {/* Icon */}
        <div className="w-16 h-16 bg-[#2D6A4F]/10 dark:bg-[#CAD2C5]/10 rounded-2xl flex items-center justify-center">
          <div className="text-[#2D6A4F] dark:text-[#FFB703]">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-[#2D6A4F] dark:text-[#CAD2C5]">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-[#1A1D1A] dark:text-gray-300 leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
