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
          {/* Left: Title, Description, Doctor Cards */}
          <div className="animate-slide-in h-full flex flex-col justify-center">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 text-foreground text-center ${
                language === 'ko' ? 'korean-text' : ''
              }`}
            >
              {t('aboutTitle')}
            </h2>

            <p
              className={`text-lg text-foreground mb-8 leading-relaxed text-center ${
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
                    <div className="flex items-start text-green-900 mb-4">
                      <div className="w-2 h-2 clinic-gradient rounded-full mt-2 mr-3"></div>
                      <span className={`leading-relaxed ${language === 'ko' ? 'korean-text' : ''}`}> 
                        {t('doctor1Credentials')}
                      </span>
                    </div>
                    <div className="flex items-start text-green-900">
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
                    <div className="flex items-start text-green-900 mb-4">
                      <div className="w-2 h-2 clinic-gradient rounded-full mt-2 mr-3"></div>
                      <span className={`leading-relaxed ${language === 'ko' ? 'korean-text' : ''}`}> 
                        {t('doctor2Credentials')}
                      </span>
                    </div>
                    <div className="flex items-start text-green-900">
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

          {/* Right: Image */}
          <div className="flex items-center justify-center h-full">
            <img
              src="/image_sample.jpg"
              alt="Clinic introduction"
              className="w-full max-w-md object-cover rounded-2xl shadow-2xl h-full"
              style={{ maxHeight: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
