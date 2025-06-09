import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-clinic-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 text-foreground ${
                language === 'ko' ? 'korean-text' : ''
              }`}
            >
              {t('aboutTitle')}
            </h2>

            <p
              className={`text-lg text-foreground mb-8 leading-relaxed ${
                language === 'ko' ? 'korean-text' : ''
              }`}
            >
              {t('aboutDescription')}
            </p>

            {/* Doctors Info Cards */}
            <div className="space-y-4">
              <Card className="bg-white/80 backdrop-blur-sm border-clinic-sage/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3
                      className={`text-xl font-semibold text-foreground mb-4 ${
                        language === 'ko' ? 'korean-text' : ''
                      }`}
                    >
                      {t('doctor1Name')}
                    </h3>
                    <div className="flex items-start text-clinic-forest mb-4">
                      <div className="w-2 h-2 clinic-gradient rounded-full mt-2 mr-3"></div>
                      <span className={`leading-relaxed ${language === 'ko' ? 'korean-text' : ''}`}>
                        {t('doctor1Credentials')}
                      </span>
                    </div>
                    <div className="flex items-start text-clinic-forest">
                      <div className="w-2 h-2 clinic-gradient rounded-full mt-2 mr-3"></div>
                      <span className={`leading-relaxed ${language === 'ko' ? 'korean-text' : ''}`}>
                        {t('doctor1Experience')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-clinic-sage/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3
                      className={`text-xl font-semibold text-foreground mb-4 ${
                        language === 'ko' ? 'korean-text' : ''
                      }`}
                    >
                      {t('doctor2Name')}
                    </h3>
                    <div className="flex items-start text-clinic-forest mb-4">
                      <div className="w-2 h-2 clinic-gradient rounded-full mt-2 mr-3"></div>
                      <span className={`leading-relaxed ${language === 'ko' ? 'korean-text' : ''}`}>
                        {t('doctor2Credentials')}
                      </span>
                    </div>
                    <div className="flex items-start text-clinic-forest">
                      <div className="w-2 h-2 clinic-gradient rounded-full mt-2 mr-3"></div>
                      <span className={`leading-relaxed ${language === 'ko' ? 'korean-text' : ''}`}>
                        {t('doctor2Experience')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80"
                alt="Traditional Korean medicine"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 clinic-gradient rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 earth-gradient rounded-full opacity-20 -z-10"></div>

            {/* Floating Cards */}
            <div className="absolute top-8 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <Award className="h-8 w-8 text-clinic-forest mb-2" />
              <p className="text-sm font-medium text-foreground">Licensed</p>
              <p className="text-xs text-muted-foreground">Professional</p>
            </div>

            <div className="absolute bottom-8 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <Heart className="h-8 w-8 text-red-500 mb-2" />
              <p className="text-sm font-medium text-foreground">Caring</p>
              <p className="text-xs text-muted-foreground">Treatment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
