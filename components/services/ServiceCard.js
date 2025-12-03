'use client';

export default function ServiceCard({ icon, title, description, delay = 0 }) {
  return (
    <div 
      className="group p-8 bg-white dark:bg-[#1A1D1A] rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-[#CAD2C5]/20 dark:border-[#2D6A4F]/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-6 w-20 h-20 bg-gradient-to-br from-[#2D6A4F]/10 to-[#FFB703]/10 dark:from-[#2D6A4F]/20 dark:to-[#FFB703]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#1A1D1A] dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
