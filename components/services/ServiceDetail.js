'use client';

export default function ServiceDetail({ title, description, features, imagePosition = 'left', index }) {
  const isLeft = imagePosition === 'left';
  
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
      {/* Illustration/Image Side */}
      <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative w-full h-[400px] bg-gradient-to-br from-[#2D6A4F]/20 to-[#FFB703]/20 dark:from-[#2D6A4F]/30 dark:to-[#FFB703]/30 rounded-[3rem] shadow-xl flex items-center justify-center backdrop-blur-sm overflow-hidden">
          {/* Organic background shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2D6A4F]/20 dark:bg-[#2D6A4F]/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FFB703]/20 dark:bg-[#FFB703]/30 rounded-full blur-2xl"></div>
          
          {/* Icon placeholder */}
          <svg className="w-48 h-48 text-[#2D6A4F] dark:text-[#CAD2C5] opacity-60 z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-1.07-7-5.18-7-10V8.3l7-3.11 7 3.11V10c0 4.82-3.14 8.93-7 10z"/>
          </svg>
        </div>
      </div>

      {/* Content Side */}
      <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
        <h3 className="text-3xl md:text-4xl font-bold text-[#1A1D1A] dark:text-white mb-6">
          {title}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          {description}
        </p>
        
        {/* Features List */}
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-[#2D6A4F]/10 dark:bg-[#2D6A4F]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#2D6A4F] dark:text-[#FFB703]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
