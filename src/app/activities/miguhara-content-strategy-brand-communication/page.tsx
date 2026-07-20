'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
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

const CONTENT_CREATION_MGH_VIDEOS = [
  {
    src: '/videos/contentCreationMgh.mp4',
    link: 'https://www.instagram.com/reel/C5VQI9wB0Yo/',
  },
  {
    src: '/videos/contentCreationMgh1.mp4',
    link: 'https://www.instagram.com/reel/C1ENG36hF7K/',
  },
  {
    src: '/videos/contentCreationMgh2.mp4',
    link: 'https://www.instagram.com/reel/C5VQI9wB0Yo/',
  },
];

export default function MiguharaContentStrategyBrandCommunicationActivity() {
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
          href="/activities"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <span>←</span>
          <span>{t('activities.back')}</span>
        </Link>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">
            {t('activity.miguhara-content-strategy-brand-communication.title')}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {t('activity.miguhara-content-strategy-brand-communication.description')}
          </p>
        </div>
      </motion.div>

      <motion.div variants={VARIANTS_ITEM} transition={TRANSITION}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {CONTENT_CREATION_MGH_VIDEOS.map((video, index) => (
            <a
              key={video.src}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full"
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="p-4">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {t('activity.miguhara-content-strategy-brand-communication.title')} {index + 1}
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
}
