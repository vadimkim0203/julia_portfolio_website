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
      '/images/projects/influencerMarketing1Mgh.png',
      '/images/projects/influencerMarketing10Mgh.png',
      '/images/projects/influencerMarketing11Mgh.png',
    ],
  },
  {
    title: 'TFIT',
    images: [
      '/images/projects/influencerMarketing2Tfit.png',
      '/images/projects/influencerMarketing3Tfit.png',
      '/images/projects/influencerMarketing4Tfit.png',
      '/images/projects/influencerMarketing5Tfit.png',
      '/images/projects/influencerMarketing6Tfit.png',
      '/images/projects/influencerMarketing7Tfit.png',
      '/images/projects/influencerMarketing8Tfit.png',
      '/images/projects/influencerMarketing9Tfit.png',
      '/images/projects/influencerMarketingTfit.jpg',
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
            className={sectionIndex === 0 ? 'space-y-6 mb-10' : 'space-y-6'}
          >
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {section.title}
              </h2>
              <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700" />
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {section.images.map((image, idx) => (
                <div
                  key={`${section.title}-${idx}`}
                  className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={image}
                      alt={`${section.title} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.main>
  );
}
