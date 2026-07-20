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
    specialty: 'Influencer Marketing | Content Marketing | SNS Marketing',
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
    'activities.title': 'Activities',
    'activities.back': 'Back to activities',
    'projects.back': 'Back to projects',
    'activity.nurilounge.title': 'Offline Event Planning & Execution',
    'activity.nurilounge.description': "Led the planning and execution of Nurilounge's offline event participation, creating event concepts and operational strategies to strengthen brand awareness.",
    'activity.nurilounge.koreanTitle': '누리라운지(Nurilounge) 오프라인 행사 참여 프로젝트 기획 및 실행',
    'activity.nurilounge.koreanDescription': '브랜드 인지도 확대를 목표로 행사 참여를 주도적으로 제안하고, 참여 콘셉트 및 운영 전략 전반을 기획했습니다.',
    'activity.nurilounge.viewOnInstagram': 'View on Instagram',
    'activity.beauty-exhibition.title': 'Beauty Exhibition Marketing & Business Support',
    'activity.beauty-exhibition.description': 'Supported marketing activities and business meetings at beauty exhibitions by presenting products, assisting communication with prospective buyers, and collecting on-site market feedback to generate marketing insights.',
    'activity.beauty-exhibition.photo1.location': 'Almaty, Kazakhstan',
    'activity.beauty-exhibition.photo1.event': 'Central Asia Beauty Expo 2025',
    'activity.beauty-exhibition.photo2.location': 'Moscow, Russia',
    'activity.beauty-exhibition.photo2.event': 'InterCHARM 2025',
    'activity.beauty-exhibition.photo3.location': 'Almaty, Kazakhstan',
    'activity.beauty-exhibition.photo3.event': 'Central Asia Beauty Expo 2026',
    'activity.viewOnInstagram': 'View on Instagram',
    'activity.viewOnTikTok': 'View on TikTok',
    'activity.viewOnYouTube': 'View on YouTube',
    'activity.creative-content-production.title': 'TFIT Creative Content Production',
    'activity.creative-content-production.description': 'Planned and produced engaging marketing content from concept to completion, including shoot planning, on-camera appearances, video production, and post-editing to strengthen brand identity and audience engagement.',
    'activity.miguhara-content-strategy-brand-communication.title': 'MIGUHARA Content Strategy & Brand Communication',
    'activity.miguhara-content-strategy-brand-communication.description': 'Developed and executed content strategies across digital channels, managing the entire content production process to deliver consistent brand messaging and enhance customer engagement.',
    'project.influencer-marketing.title': 'Influencer Marketing & Brand Growth Campaigns',
    'project.influencer-marketing.description': 'Led influencer partnership strategies with mega and mid-tier creators to enhance brand awareness and maximize product exposure. Managed the full campaign lifecycle, from influencer selection and content planning to execution and performance coordination.',
    'project.retail-promotion.title': 'Retail Channel Promotion & Sales Growth',
    'project.retail-promotion.description': 'Planned and executed promotional campaigns for the Russian retail partner Gold Apple, introducing staff incentive programs, negotiating branded content across official social media channels, and revamping the brand\'s online storefront. These initiatives contributed to a 30% increase in sales.',
    'project.content-strategy-brand-communication.title': 'Content Strategy & Brand Communication',
    'project.content-strategy-brand-communication.description': 'Developed and executed content strategies across digital channels, managing the entire content production process to deliver consistent brand messaging and enhance customer engagement.',
  },
  ko: {
    name: '율리야',
    specialty:
      'B2B 및 리테일 운영 전문가 | 소프트웨어 엔지니어링 및 자료구조에 관심',
    greetings: '안녕하세요!',
    introduction: `SNS 마케팅과 인플루언서 마케팅을 담당하는 디지털 마케터 율리야입니다. 소셜 미디어 캠페인을 기획하고 운영하며, 인플루언서와 협업해 브랜드를 홍보하는 일을 하고 있습니다. 브랜드를 더 많은 사람들에게 알리고 고객과 좋은 관계를 만드는 마케팅에 관심이 많습니다. 새로운 아이디어와 데이터를 활용해 효과적인 캠페인을 만드는 것을 좋아합니다.`,
    headerWork: '경력 사항',
    headerEducation: '학력 사항',
    headerProjects: '프로젝트',
    headerSkills: '기술 스택',
    allProjects: '전체 프로젝트 보기',
    'navigation.home': '홈',
    'navigation.projects': '프로젝트',
    'navigation.activities': '활동',
    'navigation.contact': '연락처',
    'activities.title': '활동',
    'activities.back': '활동 목록으로 돌아가기',
    'projects.back': '프로젝트 목록으로 돌아가기',
    'activity.nurilounge.title': '누리라운지(Nurilounge) 오프라인 행사 참여 프로젝트 기획 및 실행',
    'activity.nurilounge.description': '브랜드 인지도 확대를 목표로 행사 참여를 주도적으로 제안하고, 참여 콘셉트 및 운영 전략 전반을 기획했습니다.',
    'activity.nurilounge.koreanTitle': '누리라운지(Nurilounge) 오프라인 행사 참여 프로젝트 기획 및 실행',
    'activity.nurilounge.koreanDescription': '브랜드 인지도 확대를 목표로 행사 참여를 주도적으로 제안하고, 참여 콘셉트 및 운영 전략 전반을 기획했습니다.',
    'activity.nurilounge.viewOnInstagram': '인스타그램에서 보기',
    'activity.beauty-exhibition.title': '뷰티 전시회 마케팅 및 비즈니스 지원',
    'activity.beauty-exhibition.description': '뷰티 전시회에서 제품 소개, 잠재 구매자와의 커뮤니케이션 지원, 현장 시장 피드백 수집을 통해 마케팅 활동과 비즈니스 미팅을 지원했습니다.',
    'activity.beauty-exhibition.photo1.location': '알마티, 카자흐스탄',
    'activity.beauty-exhibition.photo1.event': 'Central Asia Beauty Expo 2025',
    'activity.beauty-exhibition.photo2.location': '모스크바, 러시아',
    'activity.beauty-exhibition.photo2.event': 'InterCHARM 2025',
    'activity.beauty-exhibition.photo3.location': '알마티, 카자흐스탄',
    'activity.beauty-exhibition.photo3.event': 'Central Asia Beauty Expo 2026',
    'activity.viewOnInstagram': '인스타그램에서 보기',
    'activity.viewOnTikTok': '틱톡에서 보기',
    'activity.viewOnYouTube': '유튜브에서 보기',
    'activity.creative-content-production.title': 'TFIT 크리에이티브 콘텐츠 제작',
    'activity.creative-content-production.description': '콘셉트 기획부터 촬영, 온카메라 출연, 영상 제작, 후편집까지 폭넓게 참여하며 브랜드 아이덴티티와 시청자 참여를 강화하는 마케팅 콘텐츠를 기획하고 제작했습니다.',
    'activity.miguhara-content-strategy-brand-communication.title': 'MIGUHARA 콘텐츠 전략 및 브랜드 커뮤니케이션',
    'activity.miguhara-content-strategy-brand-communication.description': '디지털 채널 전반에서 콘텐츠 전략을 수립하고 실행하며, 콘텐츠 제작 프로세스 전반을 관리해 일관된 브랜드 메시지를 전달하고 고객 참여를 높였습니다.',
    'project.influencer-marketing.title': '인플루언서 마케팅 및 브랜드 성장 캠페인',
    'project.influencer-marketing.description': '메가 및 미드 티어 크리에이터와의 인플루언서 파트너십 전략을 주도하며 브랜드 인지도를 높이고 제품 노출을 극대화했습니다. 인플루언서 선정, 콘텐츠 기획, 실행, 성과 조율까지 캠페인 전반을 관리했습니다.',
    'project.retail-promotion.title': '리테일 채널 프로모션 및 매출 성장',
    'project.retail-promotion.description': '러시아 리테일 파트너 골드 애플을 위한 프로모션 캠페인을 기획하고 실행하며 직원 인센티브 프로그램을 도입하고, 공식 SNS 채널을 통한 브랜디드 콘텐츠 협상을 진행하며, 브랜드 온라인 스토어를 리뉴얼했습니다. 이러한 활동을 통해 매출을 30% 증가시켰습니다.',
    'project.content-strategy-brand-communication.title': '콘텐츠 전략 및 브랜드 커뮤니케이션',
    'project.content-strategy-brand-communication.description': '디지털 채널 전반에서 콘텐츠 전략을 수립하고 실행하며, 콘텐츠 제작 프로세스 전반을 관리해 일관된 브랜드 메시지를 전달하고 고객 참여를 높였습니다.',
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
