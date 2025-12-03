'use client';

export default function TimelineStep({ number, title, description, isLast }) {
  return (
    <div className="flex flex-col items-center text-center relative">
      {/* Step Number */}
      <div className="w-16 h-16 bg-[#2D6A4F] dark:bg-[#FFB703] rounded-full flex items-center justify-center shadow-lg mb-4 z-10">
        <span className="text-white dark:text-[#1A1D1A] font-bold text-xl">{number}</span>
      </div>
      
      {/* Connecting Line */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#2D6A4F] to-[#CAD2C5] dark:from-[#FFB703] dark:to-[#2D6A4F]" 
             style={{ transform: 'translateX(50%)' }} />
      )}
      
      {/* Content */}
      <div className="bg-[#F0F5F1] dark:bg-[#2D6A4F]/20 rounded-2xl p-6 shadow-md w-full max-w-xs">
        <h4 className="text-lg font-bold text-[#2D6A4F] dark:text-[#CAD2C5] mb-2">
          {title}
        </h4>
        <p className="text-sm text-[#1A1D1A] dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}
