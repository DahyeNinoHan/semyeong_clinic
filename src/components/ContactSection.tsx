import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  const { language, t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      label: t('address'),
      color: 'text-clinic-forest'
    },
    {
      icon: Phone,
      label: t('phone'),
      color: 'text-clinic-forest'
    }
  ];

  const hours = [
    'mondayHours',
    'tuesdayHours',
    'wednesdayHours',
    'thursdayHours',
    'fridayHours',
    'saturdayHours',
    'sundayHours',
    'additionalInfo'
  ];

  return (
    <section id="contact" className="py-20 bg-clinic-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-foreground ${
            language === 'ko' ? 'korean-text' : ''
          }`}>
            {t('locationTitle')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Naver Map */}
          <div className="animate-slide-in h-full">
            <Card className="h-full bg-white/80 backdrop-blur-sm border-clinic-sage/20 shadow-lg overflow-hidden">
              <iframe
                src="https://map.naver.com/p/entry/place/19518476?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202506080212&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0962307&lat=37.5368166&c=16.50,0,0,0,dh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="세명한의원 위치"
              ></iframe>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in h-full">
            {/* Contact Details */}
            <Card className="bg-white/80 backdrop-blur-sm border-clinic-sage/20 shadow-lg">
              <CardHeader>
                <CardTitle className={`text-xl font-semibold text-foreground ${
                  language === 'ko' ? 'korean-text' : ''
                }`}>
                  {language === 'ko' ? '연락처 정보' : 'Contact Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon className={`h-5 w-5 mt-1 ${info.color}`} />
                      <p className={`${info.color} ${
                        language === 'ko' ? 'korean-text' : ''
                      }`}>
                        {info.label}
                      </p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="bg-white/80 backdrop-blur-sm border-clinic-sage/20 shadow-lg">
              <CardHeader>
                <CardTitle className={`text-xl font-semibold text-foreground ${
                  language === 'ko' ? 'korean-text' : ''
                }`}>
                  {t('hours')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {hours.map((hour, index) => (
                  <div key={index} className="flex items-start">
                    <p className={`text-clinic-forest text-sm leading-relaxed ${
                      language === 'ko' ? 'korean-text' : ''
                    }`}>
                      {t(hour)}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
