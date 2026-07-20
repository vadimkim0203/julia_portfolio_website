import { ReactNode } from 'react';

type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
  id: string;
};

type LocalizedString = {
  en: string;
  ko: string;
};

type WorkExperience = {
  company: LocalizedString;
  title: LocalizedString;
  location: LocalizedString;
  start: LocalizedString;
  end: LocalizedString;
  description: LocalizedString;
  link: string;
  id: string;
};

type Education = {
  name: LocalizedString;
  degree: LocalizedString;
  location: LocalizedString;
  start: LocalizedString;
  end: LocalizedString;
  link: string;
  id: string;
};

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type SocialLink = {
  label: string;
  link: string;
  icon: string | ReactNode;
};

type PublicationPost = {
  title: string;
  link: string;
  uid: string;
};

type PatentPost = {
  title: string;
  link: string;
  uid: string;
};

type Activity = {
  title: string;
  description: string;
  images: string[];
  uid: string;
  link?: string;
  titleKey?: string;
  descriptionKey?: string;
};

export type Skill = {
  name: string;
  slug: string;
  icon?: string;
};

export const PROJECTS: Project[] = [
  {
    name: 'Live Session with Bonya Bohyun',
    description:
      'Discussed Korean skincare steps and the importance of sunscreen',
    link: 'https://www.instagram.com/reel/C3AQkcphsJN/',
    video: '/videos/bohyanMiguharaLive.mp4',
    id: 'bohyan',
  },
  {
    name: 'Live Session with Olga',
    description:
      'Talked about the differences between Western and Korean skincare routines and the best products for acne-prone skin',
    link: 'https://www.instagram.com/reel/C6LrErhhNwy/',
    video: '/videos/olgaMiguharaLive.mp4',
    id: 'olga',
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: {
      en: 'TFIT',
      ko: '티핏클래스',
    },
    title: {
      en: 'Overseas Marketing Manager',
      ko: '해외 마케팅 주임',
    },
    location: {
      en: 'Incheon, South Korea',
      ko: '인천, 대한민국',
    },
    start: {
      en: 'Sep. 2024',
      ko: '2024년 9월',
    },
    end: {
      en: 'now',
      ko: '현재',
    },
    description: {
      en: `- Sourced and managed micro and macro influencers, coordinating seeding and campaign collaboration
- Planned and executed influencer marketing campaigns from outreach through performance management
- Developed SNS content planning and channel operation strategies
- Conceptualized and produced lifestyle video content for brand social channels
- Supported planning and execution of offline marketing events
- Participated in domestic and international exhibitions to promote the brand
- Supported CIS-targeted brand marketing activities
- Analyzed content and campaign performance, including engagement and response metrics`,
      ko: `- 마이크로 및 매크로 인플루언서를 발굴하고 시딩 및 캠페인 운영을 포함한 협업을 진행했습니다.
- 인플루언서 마케팅 캠페인을 섭외부터 성과 관리까지 전반적으로 기획하고 실행했습니다.
- SNS 콘텐츠 기획 및 운영 전략을 수립했습니다.
- 브랜드 SNS 채널용 라이프스타일 영상 콘텐츠를 기획하고 제작했습니다.
- 오프라인 마케팅 이벤트 기획 및 운영을 지원했습니다.
- 국내외 전시회 참가 및 브랜드 홍보 활동을 수행했습니다.
- CIS 지역 대상 브랜드 마케팅 활동을 지원했습니다.
- 콘텐츠 및 캠페인 참여도 및 반응을 분석하여 성과를 평가했습니다.`,
    },
    link: 'https://tfit.co.kr/',
    id: 'work5',
  },
  {
    company: {
      en: 'Miguhara',
      ko: '미구하라',
    },
    title: {
      en: 'Overseas Marketing Manager',
      ko: '해외 마케팅 사원',
    },
    location: {
      en: 'Seoul, South Korea',
      ko: '서울, 대한민국',
    },
    start: {
      en: 'Jun. 2023',
      ko: '2023년 6월',
    },
    end: {
      en: 'Aug. 2024',
      ko: '2024년 8월',
    },
    description: {
      en: `- Produced end-to-end marketing campaign content, including concept planning, shooting, editing, image retouching, and copywriting
- Operated Yandex Direct advertising and managed campaign performance
- Managed marketing on [**Gold Apple**](https://goldapple.ru/brands/miguhara?search_term=miguhara) and Shopee platforms
- Operated Russian Instagram account and created localized content
- Planned and managed influencer marketing, including seeding and collaboration
- Organized and executed SNS live broadcasts
- Developed and executed overseas marketing strategies
- Supported product planning through market research and trend analysis
- Operated digital marketing channels and managed budgets and performance analysis`,
      ko: `- 컨셉 기획, 촬영, 편집, 이미지 보정 및 설명 작성까지 전체 마케팅 캠페인 콘텐츠를 제작했습니다.
- Yandex Direct 광고를 운영하고 성과를 관리했습니다.
- Gold Apple 및 Shopee 플랫폼 마케팅을 관리했습니다.
- 러시아 인스타그램 계정을 운영하고 현지화된 콘텐츠를 제작했습니다.
- 인플루언서 시딩 및 협업을 포함한 인플루언서 마케팅을 기획하고 관리했습니다.
- SNS 라이브 방송을 기획하고 실행했습니다.
- 해외 마케팅 전략을 기획하고 실행했습니다.
- 시장 조사 및 트렌드 분석을 통해 상품 기획을 지원했습니다.
- 디지털 마케팅 채널을 운영하고 예산 및 성과를 분석했습니다.`,
    },
    link: 'https://miguhara.com/index.html',
    id: 'work4',
  },
  {
    company: {
      en: 'Beaudiani',
      ko: '뷰디아니',
    },
    title: {
      en: 'Overseas Marketing Manager',
      ko: '해외 마케팅 사원',
    },
    location: {
      en: 'Seoul, South Korea',
      ko: '서울, 대한민국',
    },
    start: {
      en: 'Jan. 2023',
      ko: '2023년 1월',
    },
    end: {
      en: 'Jun. 2023',
      ko: '2023년 6월',
    },
    description: {
      en: `- Identified and managed macro and micro influencers, maintaining a prioritized outreach list
- Operated digital marketing channels and coordinated content distribution
- Managed SNS accounts and developed social media content aligned with brand objectives
- Planned and executed influencer marketing campaigns to drive awareness and engagement
- Measured campaign performance and analyzed engagement metrics to optimize results`,
      ko: `- 매크로 및 마이크로 인플루언서를 발굴하고 우선순위별 리스트를 관리했습니다.
- 디지털 마케팅 채널을 운영하고 콘텐츠 배포를 조율했습니다.
- SNS 계정을 관리하며 브랜드 목표에 맞는 소셜 콘텐츠를 제작했습니다.
- 인플루언서 마케팅 캠페인을 기획하고 실행하여 인지도 및 참여를 강화했습니다.
- 캠페인 참여도 및 성과 지표를 분석하여 결과를 최적화했습니다.`,
    },
    link: 'https://beaudiani.com/index.html',
    id: 'work3',
  },
  {
    company: {
      en: 'Bacardi',
      ko: '바카디',
    },
    title: {
      en: 'B2B Customer Service Specialist',
      ko: 'B2B 해외 영업 매니저 고객 서비스 담당자',
    },
    location: {
      en: 'Moscow, Russia',
      ko: '모스크바, 러시아',
    },
    start: {
      en: 'Mar. 2021',
      ko: '2021년 3월',
    },
    end: {
      en: 'Oct. 2022',
      ko: '2022년 10월',
    },
    description: {
      en: `- Managed end-to-end Order-to-Cash (O2C) processes for key customers, ensuring accurate and efficient order fulfillment
- Worked with SAP and EDI systems, including implementation of ORDRSP and INVOICE messages to improve automation and data flow
- Drove improvements in OTIF (On-Time In-Full) performance, enhancing delivery reliability and customer satisfaction
- Generated and analyzed sales order and operational reports to support business decision-making
- Conducted freight and logistics analysis to optimize transportation efficiency and cost control
- Managed customer claim operations, ensuring timely resolution and process improvement
- Developed internal tools for order-to-customer cost and process calculation, improving operational visibility
- Participated in e-commerce projects, supporting digital transformation initiatives
- Contributed to Click & Collect optimization, improving online store performance and customer experience
- Assisted in contract drafting and documentation processes to support commercial operations
- Developed and improved Customer Service Manuals, standardizing processes across teams
- Supported AI-driven product listing initiatives, improving customer-facing catalog accuracy and efficiency
- Improved transport occupancy and logistics utilization, increasing operational efficiency
- Supported implementation of electronic document management systems (EDMS) to digitize workflows
- Acted as a mentor, supporting onboarding and development of junior team members`,
      ko: `- 주요 고객을 위한 O2C 프로세스를 전반적으로 관리하여 정확하고 효율적인 주문 이행을 보장했습니다.
- ORDRSP 및 INVOICE 메시지 구현을 포함한 SAP 및 EDI 시스템을 활용하여 자동화와 데이터 흐름을 개선했습니다.
- OTIF 성과를 개선하여 배송 신뢰성과 고객 만족도를 높였습니다.
- 판매 주문 및 운영 보고서를 작성하고 분석하여 비즈니스 의사결정을 지원했습니다.
- 운송 효율성과 비용 관리를 최적화하기 위해 화물 및 물류 분석을 수행했습니다.
- 고객 클레임 운영을 관리하여 신속한 해결과 프로세스 개선을 추진했습니다.
- OTC 비용 및 프로세스 계산을 위한 내부 도구를 개발하여 운영 가시성을 향상했습니다.
- 디지털 전환 이니셔티브를 지원하는 전자상거래 프로젝트에 참여했습니다.
- Click & Collect 최적화에 기여하여 온라인 매장 성능과 고객 경험을 개선했습니다.
- 상업 운영을 지원하기 위해 계약 초안 작성 및 문서화 프로세스를 지원했습니다.
- 고객 서비스 매뉴얼을 개발 및 개선하여 팀 간 프로세스를 표준화했습니다.
- 고객 친화적 카탈로그 정확성과 효율성을 높이기 위해 AI 기반 상품 리스트 작업을 
지원했습니다.
- 운송 점유율과 물류 활용도를 개선하여 운영 효율성을 높였습니다.
- 전자문서관리시스템(EDMS) 도입을 지원하여 워크플로우를 디지털화했습니다.
- 주니어 팀원의 온보딩 및 개발을 지원하는 멘토 역할을 수행했습니다.`,
    },
    link: 'https://www.bacardilimited.com/',
    id: 'work2',
  },
  {
    company: {
      en: 'Bacardi',
      ko: '바카디',
    },
    title: {
      en: 'B2B Customer Service Assistant',
      ko: 'B2B 해외 영업 매니저 고객 서비스 담당자',
    },
    location: {
      en: 'Moscow, Russia',
      ko: '모스크바, 러시아',
    },
    start: {
      en: 'Sep. 2018',
      ko: '2018년 9월',
    },
    end: {
      en: 'Mar. 2021',
      ko: '2021년 3월',
    },
    description: {
      en: `- Managed Order-to-Cash (O2C) processes for key customers and distributors, ensuring accurate and timely order fulfillment
- Worked with SAP and EDI systems to process orders and maintain data accuracy across supply chain operations
- Supported promotional execution, ensuring proper implementation across retail and distribution channels
- Calculated and analyzed monthly KPIs and performance scorecards to monitor operational efficiency
- Monitored and improved OTIF (On-Time In-Full) delivery performance
- Collaborated on cooperative delivery (pooling) initiatives to optimize logistics and distribution efficiency
- Generated reports on order status and inventory levels to support stock control and demand planning
- Conducted internal and external supply chain surveys to identify process improvements and operational gaps
- Participated in company job fairs and employer branding activities
- Took part in the “One Day in Other Shoes” program to gain cross-functional business understanding`,
      ko: `- 주요 고객 및 유통업체를 위한 주문-투-현금(O2C) 프로세스를 관리하여 정확하고 적시적인 주문 이행을 보장했습니다.
- SAP 및 EDI 시스템을 활용해 주문을 처리하고 공급망 운영 전반에 걸쳐 데이터 정확성을 유지했습니다.
- 소매 및 유통 채널에서 판촉 활동의 적절한 실행을 지원했습니다.
- 월별 KPI 및 성과 지표를 계산하고 분석하여 운영 효율성을 모니터링했습니다.
- OTIF(정시완전배송) 성과를 추적하고 개선했습니다.
- 물류 효율화를 위해 협력 배송(풀링) 이니셔티브에 참여했습니다.
- 재고 관리 및 수요 기획을 지원하기 위해 주문 상태 및 재고 수준 보고서를 작성했습니다.
- 내부 및 외부 공급망 조사를 수행하여 프로세스 개선 및 운영 격차를 식별했습니다.
- 회사 채용 박람회 및 고용 브랜딩 활동에 참여했습니다.
- '다른 역할에서의 하루(One Day in Other Shoes)' 프로그램에 참여해 교차 기능적 비즈니스 이해도를 높였습니다.`,
    },
    link: 'https://www.bacardilimited.com/',
    id: 'work1',
  },
];

export const EDUCATION: Education[] = [
  {
    name: {
      en: 'Moscow State University of Management',
      ko: 'Moscow State University of Management',
    },
    degree: {
      en: 'BSc in Logistics and Supply Chains',
      ko: '물류 및 공급망 관리 학사',
    },
    location: {
      en: 'Moscow, Russia',
      ko: '모스크바, 러시아',
    },
    start: {
      en: 'Sep 2013',
      ko: '2013년 9월',
    },
    end: {
      en: 'Jul 2017',
      ko: '2017년 7월',
    },
    link: 'https://guu.ru/',
    id: 'education1',
  },
  {
    name: {
      en: 'Induk University',
      ko: '인덕대학교',
    },
    degree: {
      en: 'Korean Language Courses',
      ko: '어학 교육 과정',
    },
    location: {
      en: 'Seoul, South Korea',
      ko: '서울, 대한민국',
    },
    start: {
      en: 'Jun 2014',
      ko: '2014년 06월',
    },
    end: {
      en: 'Aug 2014',
      ko: '2014년 8월',
    },
    link: 'https://www.induk.ac.kr/KR/index.do',
    id: 'education2',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: 'Building an E-Commerce B2B Korean Apparel platform',
  //   description:
  //     'Building a platform for connecting international buyers all around the world.',
  //   link: 'https://www.oceanstore.kr',
  //   uid: 'blog-2',
  // },
  // {
  //   title: 'Procharity',
  //   description: 'Intellectual support for charitable foundations.',
  //   link: 'https://procharity.ru/',
  //   uid: 'blog-1',
  // },
];

export const ACTIVITY_LIST: Activity[] = [
  {
    title: 'Nurilounge Offline Event Planning & Execution',
    description:
      "Led the planning and execution of Nurilounge's offline event participation, creating event concepts and operational strategies to strengthen brand awareness.",
    images: [
      '/images/activities/nuriday.jpg',
      '/images/activities/nuriday1.jpg',
      '/images/activities/nuriday2.jpg',
    ],
    uid: 'activity-4',
    link: 'https://www.instagram.com/reel/DO5TaTYkrIQ/',
    titleKey: 'activity.nurilounge.title',
    descriptionKey: 'activity.nurilounge.description',
  },
  {
    title: 'Beauty Exhibition Marketing & Business Support',
    description:
      'Supported marketing activities and business meetings at beauty exhibitions by presenting products, assisting communication with prospective buyers, and collecting on-site market feedback to generate marketing insights.',
    images: [
      '/images/activities/kazakhstan2025.jpg',
      '/images/activities/moscow.jpg',
      '/images/activities/kazakhstan2026.jpg',
    ],
    uid: 'activity-5',
    titleKey: 'activity.beauty-exhibition.title',
    descriptionKey: 'activity.beauty-exhibition.description',
  },
  {
    title: 'Creative Content Production',
    description:
      'Planned and produced engaging marketing content from concept to completion, including shoot planning, on-camera appearances, video production, and post-editing to strengthen brand identity and audience engagement.',
    images: [],
    uid: 'activity-6',
    titleKey: 'activity.creative-content-production.title',
    descriptionKey: 'activity.creative-content-production.description',
  },
  {
    title: 'MIGUHARA Content Strategy & Brand Communication',
    description:
      'Developed and executed content strategies across digital channels, managing the entire content production process to deliver consistent brand messaging and enhance customer engagement.',
    images: [],
    uid: 'activity-7',
    titleKey: 'activity.miguhara-content-strategy-brand-communication.title',
    descriptionKey: 'activity.miguhara-content-strategy-brand-communication.description',
  },
  // {
  //   title: 'Uniqlo Manager Candidate Program Photo Shoot',
  //   description:
  //     'Took part in Uniqlo photo shoot session for Uniqlo manager candidate program',
  //   images: [
  //     '/images/uniqlo1.jpeg',
  //     '/images/uniqlo2.jpeg',
  //     '/images/uniqlo3.jpeg',
  //     '/images/uniqlo4.jpeg',
  //     '/images/uniqlo5.jpeg',
  //   ],
  //   uid: 'activity-1',
  // },
  // {
  //   title: 'Amos Professional Workshop',
  //   description:
  //     'Participated in Amos Professional Workshop where we discussed development plans for the next fiscal year. Key focus areas included strategic marketing plans for entering new European and Asian markets, identifying emerging market opportunities, and optimizing budget allocation for regional expansion initiatives.',
  //   images: ['/images/amosWorkshop.png'],
  //   uid: 'activity-2',
  // },
  // {
  //   title:
  //     'Field Trip with Mongolian Partners to Amorepacific Factory and Botanical Garden',
  //   description:
  //     "Organized a visit with Mongolian business partners to Amorepacific's facilities in Asan, including the factory, headquarters, and botanical garden. Explored the company's production processes, innovative technologies, and sustainable practices. Learned how natural ingredients are cultivated and selected from the botanical garden before being used in product development, while also discussing potential partnership opportunities.",
  //   images: [
  //     '/images/Mongolia1.jpg',
  //     '/images/Mongolia2.jpg',
  //     '/images/Mongolia3.jpg',
  //     '/images/Mongolia4.jpg',
  //   ],
  //   uid: 'activity-3',
  //   link: 'https://www.instagram.com/p/DXUS0O5zV4Q/',
  // },
];

export const PUBLICATION_LIST: PublicationPost[] = [
  // {
  //   title: 'CodeSeoul Backend Bootcamp ',
  //   link: 'https://www.linkedin.com/posts/kim-vadim_on-the-final-day-of-the-codeseoul-backend-activity-7293836988409860096-rImd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkDHSIB85vpEyzTFWg-51yFPPnfjrAHbys',
  //   uid: 'publication-1',
  // },
  // {
  //   title: 'Supabase Launch Week 15',
  //   link: 'https://www.linkedin.com/posts/florianldt_yesterday-i-had-a-pleasure-to-be-part-of-activity-7356881878588534784-WByQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkDHSIB85vpEyzTFWg-51yFPPnfjrAHbys',
  //   uid: 'publication-2',
  // },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/julia-ten/',
    icon: './icons/linkedin.svg',
  },
  // {
  //   label: 'Github',
  //   link: 'https://github.com/vadimkim0203',
  //   icon: '/icons/github.svg',
  // },

  // {
  //   label: 'Instagram',
  //   link: 'https://www.instagram.com/kimvadim_/',
  //   icon: '/icons/instagram (1).svg',
  // },
];

export const SKILLS: Skill[] = [
  {
    name: 'Russian',
    slug: 'russian',
    icon: '/icons/russian.svg',
  },
  {
    name: 'English',
    slug: 'english',
    icon: '/icons/english.svg',
  },
  {
    name: 'Korean',
    slug: 'korean',
    icon: '/icons/korean.svg',
  },
  {
    name: 'Trends Spotting',
    slug: 'trends-spotting',
    icon: '/icons/trends-spotting.svg',
  },
  {
    name: 'Influencer Marketing',
    slug: 'influencer-marketing',
    icon: '/icons/influencer-marketing.svg',
  },
  {
    name: 'Digital Advertising',
    slug: 'digital-advertising',
    icon: '/icons/digital-advertising.svg',
  },
  {
    name: 'Content Strategy',
    slug: 'content-strategy',
    icon: '/icons/content-strategy.svg',
  },
  {
    name: 'Social Media Management',
    slug: 'social-media-management',
    icon: '/icons/social-media.svg',
  },
  {
    name: 'Campaign Analytics',
    slug: 'campaign-analytics',
    icon: '/icons/campaign-analytics.svg',
  },
  {
    name: 'International Marketing',
    slug: 'international-marketing',
    icon: '/icons/international-marketing.svg',
  },
];

export const EMAIL = 'juliia.ten@gmail.com';
