import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { language, t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=2000&q=80"
          alt="Healing nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-clinic-forest/80 via-clinic-sage/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className={`whitespace-nowrap text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 ${
            language === 'ko' ? 'korean-text' : ''
          }`}>
            {t('heroTitle')}
          </h1>
          
          <p className={`text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed ${
            language === 'ko' ? 'korean-text' : ''
          }`}>
            {t('heroSubtitle')}
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500 hidden lg:block"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
