import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Activity, Leaf, CircleDot, MessageCircle } from 'lucide-react';

const ServicesSection = () => {
  const { language, t } = useLanguage();

  const services = [
    {
      icon: Activity,
      key: 'acupuncture',
      gradient: 'from-clinic-sage to-clinic-forest'
    },
    {
      icon: Leaf,
      key: 'herbalPrescriptions',
      gradient: 'from-clinic-earth to-clinic-sage'
    },
    {
      icon: CircleDot,
      key: 'cuppingTherapy',
      gradient: 'from-clinic-forest to-clinic-earth'
    },
    {
      icon: MessageCircle,
      key: 'healthCounseling',
      gradient: 'from-primary to-clinic-sage'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-foreground ${
            language === 'ko' ? 'korean-text' : ''
          }`}>
            {t('servicesTitle')}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
            language === 'ko' ? 'korean-text' : ''
          }`}>
            {t('servicesSubtitle')}
          </p>
          {/* Comma-separated specialties */}
          <div className="text-lg text-foreground max-w-2xl mx-auto mt-6 mb-0 text-center">
            한방 내과, 부인과, 소아과, 안과, 이비인후과, 신경정신과, 물리치료과
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.filter(s => s.key !== 'cuppingTherapy').map((service, index) => {
            // Change 'acupuncture' to '침구 치료' in Korean
            const Icon = service.icon;
            let title = t(service.key);
            if (service.key === 'acupuncture' && language === 'ko') title = '침구 치료';
            return (
              <Card
                key={service.key}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className={`text-xl font-semibold text-foreground group-hover:text-clinic-forest transition-colors ${
                    language === 'ko' ? 'korean-text' : ''
                  }`}>
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className={`text-muted-foreground leading-relaxed ${
                    language === 'ko' ? 'korean-text' : ''
                  }`}>
                    {service.key === 'acupuncture' && language === 'ko'
                      ? '경혈점을 자극하여 기혈 순환을 개선하고 통증을 완화합니다'
                      : t(`${service.key}Desc`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 bg-clinic-cream/50 rounded-3xl p-8 md:p-12">
          <h3 className={`text-2xl md:text-3xl font-bold text-center mb-12 text-foreground ${
            language === 'ko' ? 'korean-text' : ''
          }`}>
            {t('whyChooseTitle')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'licensedDoctors',
              'personalizedTreatment',
              'naturalRemedies'
            ].map((key, index) => (
              <div
                key={key}
                className="text-center animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 clinic-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className={`text-foreground font-medium ${
                  language === 'ko' ? 'korean-text' : ''
                }`}>
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
