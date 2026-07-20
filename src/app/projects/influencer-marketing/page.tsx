'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const VARIANTS_ITEM = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const TRANSITION = {
  duration: 0.3,
};

const INFLUENCER_MARKETING_SECTIONS = [
  {
    title: 'MIGUHARA',
    images: [
      {
        src: '/images/projects/influencerMarketingMgh.png',
        link: 'https://www.instagram.com/reels/C3sHZC-vAqi/',
        linkKey: 'activity.viewOnInstagram',
      },
      {
        src: '/images/projects/influencerMarketingMgh1.png',
        link: 'https://www.instagram.com/reels/CwcDCVktMb4/',
        linkKey: 'activity.viewOnInstagram',
      },
      {
        src: '/images/projects/influencerMarketingMgh2.png',
        link: 'https://www.instagram.com/reels/C4u89TdI2r9/',
        linkKey: 'activity.viewOnInstagram',
      },
      {
        src: '/images/projects/influencerMarketingMgh3.png',
        link: 'https://www.instagram.com/reels/C6yfDrYruiC/',
        linkKey: 'activity.viewOnInstagram',
      },
      {
        src: '/images/projects/influencerMarketingMgh4.png',
        link: 'https://www.instagram.com/reels/C9mLWGRSrAB/',
        linkKey: 'activity.viewOnInstagram',
      },
      {
        src: '/images/projects/influencerMarketingMgh5.png',
        link: 'https://www.instagram.com/reels/C7ZKL4LogAD/',
        linkKey: 'activity.viewOnInstagram',
      },
      {
        src: '/images/projects/influencerMarketingMgh6.png',
        orientation: 'landscape' as const,
        link: 'https://www.youtube.com/watch?v=JwvjV-5JN24&t=28s',
        linkKey: 'activity.viewOnYouTube',
      },
    ],
  },
  {
    title: 'TFIT',
    images: [
      {
        src: '/images/projects/influencerMarketingTfit.jpg',
        link: 'https://www.tiktok.com/@_agentgirl_/video/7579895072578145556',
        linkKey: 'activity.viewOnTikTok',
      },
      {
        src: '/images/projects/influencerMarketingTfit3.jpg',
        link: 'https://www.tiktok.com/@anelqyzz/video/7423082907884916011',
        linkKey: 'activity.viewOnTikTok',
      },
      {
        src: '/images/projects/influencerMarketingTfit4.jpg',
        link: 'https://www.tiktok.com/@verolluna/photo/7581176086910782740',
        linkKey: 'activity.viewOnTikTok',
      },
      {
        src: '/images/projects/influencerMarketingTfit5.jpg',
        link: 'https://www.tiktok.com/@ddalqiwee/video/7498442343662603575',
        linkKey: 'activity.viewOnTikTok',
      },
      {
        src: '/images/projects/influencerMarketingTfit6.jpg',
        link: 'https://www.tiktok.com/@anferovamary/video/7537771846779931926',
        linkKey: 'activity.viewOnTikTok',
      },
      {
        src: '/images/projects/influencerMarketingTfit7.jpg',
        link: 'https://www.instagram.com/reels/DYk4h7ZqkNV/',
        linkKey: 'activity.viewOnInstagram',
      },
      {
        src: '/images/projects/influencerMarketingTfit8.jpg',
        link: 'https://www.youtube.com/shorts/qV8Z8BluYdQ',
        linkKey: 'activity.viewOnYouTube',
      },
      {
        src: '/images/projects/influencerMarketingTfit9.jpg',
        link: 'https://www.instagram.com/reels/DSmG3XciFff/',
        linkKey: 'activity.viewOnInstagram',
      },
      {
        src: '/images/projects/influencerMarketingTfit2.jpg',
        link: 'https://www.tiktok.com/@_julietteee_3/video/7432977506472365330',
        linkKey: 'activity.viewOnTikTok',
      },
    ],
  },
];

export default function InfluencerMarketingProjectPage() {
  const { t } = useLanguage();

  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={VARIANTS_ITEM} transition={TRANSITION}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors mb-8"
        >
          <span>←</span>
          <span>{t('projects.back')}</span>
        </Link>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            {t('project.influencer-marketing.title')}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {t('project.influencer-marketing.description')}
          </p>
        </div>
      </motion.div>

      <motion.div variants={VARIANTS_ITEM} transition={TRANSITION}>
        {INFLUENCER_MARKETING_SECTIONS.map((section, sectionIndex) => (
          <div
            key={section.title}
            className={sectionIndex === 0 ? 'mb-10 space-y-6' : 'space-y-6'}
          >
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {section.title}
              </h2>
              <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700" />
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {section.images.map((image, idx) => {
                const isLandscape = image.orientation === 'landscape';
                const media = (
                  <div
                    className={`relative w-full overflow-hidden ${
                      isLandscape ? 'aspect-[3/2]' : 'aspect-[3/4]'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={`${section.title} ${idx + 1}`}
                      fill
                      className={`object-cover ${isLandscape ? 'object-center' : 'object-bottom'}`}
                    />
                  </div>
                );

                return (
                  <div
                    key={`${section.title}-${idx}`}
                    className={[
                      'overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60',
                      isLandscape ? 'md:col-span-2 lg:col-span-3' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {image.link ? (
                      <a
                        href={image.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {media}
                      </a>
                    ) : (
                      media
                    )}
                    {image.link && image.linkKey ? (
                      <div className="p-4">
                        <a
                          href={image.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                        >
                          {t(image.linkKey)}
                          <span>→</span>
                        </a>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.main>
  );
}
