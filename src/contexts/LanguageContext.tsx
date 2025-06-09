import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ko: {
    // Navigation
    home: '홈',
    about: '한의원 소개',
    services: '진료 과목',
    contact: '연락처',
    
    // Hero Section
    heroTitle: '전통 한의학과 30년 임상 경험으로',
    heroSubtitle: '몸과 마음의 균형을 찾아드립니다',
    
    // About Section
    aboutTitle: '한의원 소개',
    aboutDescription: '1994년부터 30년 넘게 한 자리를 지켜온 부부 한의원입니다.\n그동안 쌓아온 다양한 임상 경험과 따뜻한 진심으로 환자 한 분 한 분을 맞이합니다.\n몸과 마음의 균형을 되찾는 자연치유 중심의 한방 치료를 제공합니다.',
    doctor1Name: '한붕희 원장',
    doctor1Credentials: '1992년 원광대학교 한의학과 졸업',
    doctor1Experience: '1992년 세명한의원 개원',
    doctor2Name: '최금희 원장',
    doctor2Credentials: '1994년 원광대학교 한의학과 졸업',
    doctor2Experience: '2012년부터 세명한의원에서 공동 진료',
    
    // Services Section
    servicesTitle: '진료 과목',
    servicesSubtitle: '전통 한의학의 다양한 치료법으로 건강을 회복하세요',
    acupuncture: '침 치료',
    acupunctureDesc: '경혈점을 자극하여 기혈 순환을 개선하고 통증을 완화합니다',
    herbalPrescriptions: '한약 처방',
    herbalPrescriptionsDesc: '개인 체질에 맞는 맞춤형 한약으로 근본 치료를 진행합니다',
    cuppingTherapy: '부항 치료',
    cuppingTherapyDesc: '음압을 이용하여 혈액 순환을 촉진하고 독소를 제거합니다',
    healthCounseling: '건강 상담',
    healthCounselingDesc: '생활습관 개선과 예방 중심의 건강 관리 방법을 안내합니다',
    
    // Why Choose Us Section
    whyChooseTitle: '세명한의원이 특별한 이유',
    licensedDoctors: '30년 이상 다양한 임상 경험을 쌓아온 숙련된 한의사',
    personalizedTreatment: '체질과 증상에 맞춘 개인별 맞춤 치료',
    naturalRemedies: '안전하고 부담 없는, 자연치유 중심의 한방 치료',
    
    // Location Section
    locationTitle: '위치 및 진료 시간',
    address: '서울 광진구 광나루로56길 63 프라임프라자 301호',
    phone: '전화번호: 02-458-0021',
    hours: '진료 시간',
    mondayHours: '월: 09:30 - 18:00 (13:00 - 14:00 휴게시간)',
    tuesdayHours: '화: 09:30 - 18:00 (13:00 - 14:00 휴게시간)',
    wednesdayHours: '수: 09:30 - 18:00 (13:00 - 14:00 휴게시간)',
    thursdayHours: '목: 정기휴무 (매주 목, 일요일)',
    fridayHours: '금: 09:30 - 18:00 (13:00 - 14:00 휴게시간)',
    saturdayHours: '토: 09:30 - 13:00 (매달 마지막 토요일 휴진)',
    sundayHours: '일: 정기휴무 (매주 목, 일요일)',
    additionalInfo: '* 근무시간 외 진료는 예약 바랍니다.',
    
    // Footer
    termsOfUse: '이용약관',
    privacyPolicy: '개인정보처리방침',
    allRightsReserved: '© 2024 세명한의원. 모든 권리 보유.',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Traditional Korean Medicine with 30 Years of Clinical Experience',
    heroSubtitle: 'Finding Balance for Your Body and Mind',
    
    // About Section
    aboutTitle: 'About Our Clinic',
    aboutDescription: 'We are a husband and wife Korean medicine clinic that has been serving the same location for over 30 years since 1994.\nWe welcome each patient with the diverse clinical experience we have accumulated and warm sincerity.\nWe provide natural healing-centered Korean medicine treatments to restore the balance of body and mind.',
    doctor1Name: 'Dr. Han Bung-hee',
    doctor1Credentials: 'Graduated from Wonkwang University College of Korean Medicine in 1992',
    doctor1Experience: 'Established Se Myeong Korean Medicine Clinic in 1992',
    doctor2Name: 'Dr. Choi Geum-hee',
    doctor2Credentials: 'Graduated from Wonkwang University College of Korean Medicine in 1994',
    doctor2Experience: 'Joint practice at Se Myeong Korean Medicine Clinic since 2012',
    
    // Services Section
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Restore your health with various traditional Korean medicine treatments',
    acupuncture: 'Acupuncture',
    acupunctureDesc: 'Stimulate acupoints to improve qi and blood circulation and relieve pain',
    herbalPrescriptions: 'Herbal Prescriptions',
    herbalPrescriptionsDesc: 'Customized herbal medicine tailored to individual constitution for fundamental treatment',
    cuppingTherapy: 'Cupping Therapy',
    cuppingTherapyDesc: 'Use negative pressure to promote blood circulation and remove toxins',
    healthCounseling: 'Health Counseling',
    healthCounselingDesc: 'Guidance on lifestyle improvements and prevention-centered health management',
    
    // Why Choose Us Section
    whyChooseTitle: 'What Makes Semyeong Special',
    licensedDoctors: 'Skilled Korean medicine doctors with over 30 years of diverse clinical experience',
    personalizedTreatment: 'Personalized treatments tailored to individual constitution and symptoms',
    naturalRemedies: 'Safe, burden-free, natural healing-centered Korean medicine treatments',
    
    // Location Section
    locationTitle: 'Location & Hours',
    address: '301, Prime Plaza, 63 Gwangnaru-ro 56-gil, Gwangjin-gu, Seoul, Korea',
    phone: 'Phone: 02-458-0021',
    hours: 'Operating Hours',
    mondayHours: 'Mon: 09:30 - 18:00 (13:00 - 14:00 Break)',
    tuesdayHours: 'Tue: 09:30 - 18:00 (13:00 - 14:00 Break)',
    wednesdayHours: 'Wed: 09:30 - 18:00 (13:00 - 14:00 Break)',
    thursdayHours: 'Thu: Closed (Every Thursday and Sunday)',
    fridayHours: 'Fri: 09:30 - 18:00 (13:00 - 14:00 Break)',
    saturdayHours: 'Sat: 09:30 - 13:00 (Last Saturday of each month closed)',
    sundayHours: 'Sun: Closed (Every Thursday and Sunday)',
    additionalInfo: '* Please make an appointment for treatment outside business hours.',
    
    // Footer
    termsOfUse: 'Terms of Use',
    privacyPolicy: 'Privacy Policy',
    allRightsReserved: '© 2024 Se Myeong Korean Medicine Clinic. All rights reserved.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ko']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
