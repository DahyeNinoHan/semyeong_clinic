import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { language, t } = useLanguage();

  const quickLinks = [
    { key: 'termsOfUse', href: '#' },
    { key: 'privacyPolicy', href: '#' }
  ];

  return (
    <footer className="bg-clinic-forest text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="font-semibold text-xl">
                <span className={language === 'ko' ? 'korean-text' : ''}>
                  {language === 'ko' ? '세명한의원' : 'Se Myeong Korean Medicine Clinic'}
                </span>
              </div>
            </div>
            
            <p className={`text-white/80 leading-relaxed ${
              language === 'ko' ? 'korean-text' : ''
            }`}>
              {language === 'ko' 
                ? '자연의 치유력을 믿으며, 전통 한의학으로 건강한 삶을 추구합니다.'
                : 'Believing in the healing power of nature, we pursue healthy living through traditional Korean medicine.'
              }
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold mb-4 ${
              language === 'ko' ? 'korean-text' : ''
            }`}>
              {language === 'ko' ? '연락처' : 'Contact'}
            </h3>
            
            <div className="space-y-2 text-white/80">
              <p className={language === 'ko' ? 'korean-text' : ''}>
                {t('address')}
              </p>
              <p className={language === 'ko' ? 'korean-text' : ''}>
                {t('phone')}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold mb-4 ${
              language === 'ko' ? 'korean-text' : ''
            }`}>
              {language === 'ko' ? '바로가기' : 'Quick Links'}
            </h3>
            
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`block text-white/80 hover:text-white transition-colors duration-200 ${
                    language === 'ko' ? 'korean-text' : ''
                  }`}
                >
                  {t(link.key)}
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="pt-4">
              <p className={`text-sm text-white/60 ${
                language === 'ko' ? 'korean-text' : ''
              }`}>
                {language === 'ko' 
                  ? '건강한 삶을 위한 상담을 원하시면 언제든 연락주세요.'
                  : 'Contact us anytime for consultation on healthy living.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className={`text-white/60 text-sm flex items-center justify-center ${
            language === 'ko' ? 'korean-text' : ''
          }`}>
            {t('allRightsReserved')}
            <Heart className="h-4 w-4 mx-2 text-red-400" />
            <span className={language === 'ko' ? 'korean-text' : ''}>
              {language === 'ko' ? '건강한 미래를 함께' : 'Healthy Future Together'}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
