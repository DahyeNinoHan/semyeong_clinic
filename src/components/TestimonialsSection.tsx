
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const { language, t } = useLanguage();

  const testimonials = [
    {
      quote: 'testimonial1',
      patient: 'patient1'
    },
    {
      quote: 'testimonial2',
      patient: 'patient2'
    },
    {
      quote: 'testimonial3',
      patient: 'patient3'
    }
  ];

  return (
    <section id="testimonials" className="py-20 clinic-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-white ${
            language === 'ko' ? 'korean-text' : ''
          }`}>
            {t('testimonialsTitle')}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-clinic-sage mb-4" />
                <p className={`text-muted-foreground mb-6 leading-relaxed italic ${
                  language === 'ko' ? 'korean-text' : ''
                }`}>
                  {t(testimonial.quote)}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 clinic-gradient rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {language === 'ko' ? '환' : 'P'}
                    </span>
                  </div>
                  <div>
                    <p className={`font-semibold text-foreground ${
                      language === 'ko' ? 'korean-text' : ''
                    }`}>
                      {t(testimonial.patient)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ko' ? '환자' : 'Patient'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
