'use client';

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import Cookies from 'js-cookie';

export type Locale = 'en' | 'ko';

interface TranslationSet {
  [key: string]: string;
}

type Translations = {
  [K in Locale]: TranslationSet;
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  en: {
    name: 'Yuliya Ten',
    specialty: 'B2B Marketing | SNS Marketing | Influencer Marketing',
    greetings: 'Hi!',
    introduction: `I'm Yuliya, a digital marketer specializing in SNS marketing, influencer marketing, and beauty brand communications. I have experience planning and managing social media campaigns, building relationships with influencers, and developing marketing strategies that increase brand visibility and engagement. I enjoy combining creativity with statistical insights to create effective campaigns and valuable connections between brands and customers.`,
    headerWork: 'Work Experience',
    headerEducation: 'Education',
    headerProjects: 'Projects',
    headerSkills: 'Skills',
    allProjects: 'See all projects',
    'navigation.home': 'Home',
    'navigation.projects': 'Projects',
    'navigation.activities': 'Activities',
    'navigation.contact': 'Contact',
  },
  ko: {
    name: '율리야',
    specialty:
      'B2B 및 리테일 운영 전문가 | 소프트웨어 엔지니어링 및 자료구조에 관심',
    greetings: '안녕하세요!',
    introduction: `안녕하세요. 저는 율리야 입니다. SNS 마케팅과 인플루언서 마케팅을 담당하는 디지털 마케터입니다. 소셜 미디어 캠페인을 기획하고 운영하며, 인플루언서와 협업해 브랜드를 홍보하는 일을 하고 있습니다. 브랜드를 더 많은 사람들에게 알리고 고객과 좋은 관계를 만드는 마케팅에 관심이 많습니다. 새로운 아이디어와 데이터를 활용해 효과적인 캠페인을 만드는 것을 좋아합니다.`,
    headerWork: '경력 사항',
    headerEducation: '학력 사항',
    headerProjects: '프로젝트',
    headerSkills: '기술 스택',
    allProjects: '전체 프로젝트 보기',
    'navigation.home': '홈',
    'navigation.projects': '프로젝트',
    'navigation.activities': '활동',
    'navigation.contact': '연락처',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = Cookies.get('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'ko')) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    Cookies.set('locale', newLocale, { expires: 365 });
    setLocaleState(newLocale);
  };

  const t = (key: string): string => {
    return translations[locale]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
