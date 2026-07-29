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

const BEAUTY_EXHIBITION_MEDIA = [
  {
    type: 'image' as const,
    src: '/images/activities/kazakhstan2025.jpg',
    locationKey: 'activity.beauty-exhibition.photo1.location',
    eventKey: 'activity.beauty-exhibition.photo1.event',
    link: 'https://en.cabeauty.kz/',
  },
  {
    type: 'image' as const,
    src: '/images/activities/moscow.jpg',
    locationKey: 'activity.beauty-exhibition.photo2.location',
    eventKey: 'activity.beauty-exhibition.photo2.event',
    link: 'https://en.intercharm.ru/',
  },
  {
    type: 'image' as const,
    src: '/images/activities/kazakhstan2026.jpg',
    locationKey: 'activity.beauty-exhibition.photo3.location',
    eventKey: 'activity.beauty-exhibition.photo3.event',
    link: 'https://en.cabeauty.kz/',
  },
  {
    type: 'video' as const,
    src: '/videos/tfitShort.MP4',
    link: 'https://www.instagram.com/reel/DZKcdkdBXdZ/',
    linkKey: 'activity.viewOnInstagram',
  },
];

export default function BeautyExhibitionActivity() {
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
            {t('activity.beauty-exhibition.title')}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {t('activity.beauty-exhibition.description')}
          </p>
        </div>
      </motion.div>

      <motion.div variants={VARIANTS_ITEM} transition={TRANSITION}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {BEAUTY_EXHIBITION_MEDIA.map((item) => (
            <a
              key={item.src}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80"
            >
              <div className="relative aspect-square overflow-hidden">
                {item.type === 'video' ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt={`${t(item.eventKey)} at ${t(item.locationKey)}`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="space-y-1 p-4">
                {item.type === 'video' ? (
                  <p className="inline-flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {t(item.linkKey)}
                    <span>→</span>
                  </p>
                ) : (
                  <>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {t(item.locationKey)}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {t(item.eventKey)}
                    </p>
                  </>
                )}
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
}
