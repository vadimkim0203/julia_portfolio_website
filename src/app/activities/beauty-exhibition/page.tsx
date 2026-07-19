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

const BEAUTY_EXHIBITION_IMAGES = [
  {
    src: '/images/activities/kazakhstan2025.jpg',
    locationKey: 'activity.beauty-exhibition.photo1.location',
    eventKey: 'activity.beauty-exhibition.photo1.event',
    link: 'https://en.cabeauty.kz/',
  },
  {
    src: '/images/activities/moscow.jpg',
    locationKey: 'activity.beauty-exhibition.photo2.location',
    eventKey: 'activity.beauty-exhibition.photo2.event',
    link: 'https://en.intercharm.ru/',
  },
  {
    src: '/images/activities/kazakhstan2026.jpg',
    locationKey: 'activity.beauty-exhibition.photo3.location',
    eventKey: 'activity.beauty-exhibition.photo3.event',
    link: 'https://en.cabeauty.kz/',
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
          className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors mb-8"
        >
          <span>←</span>
          <span>{t('activities.back')}</span>
        </Link>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            {t('activity.beauty-exhibition.title')}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {t('activity.beauty-exhibition.description')}
          </p>
        </div>
      </motion.div>

      <motion.div variants={VARIANTS_ITEM} transition={TRANSITION}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BEAUTY_EXHIBITION_IMAGES.map((image, idx) => (
            <a
              key={idx}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80"
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={`${t(image.eventKey)} at ${t(image.locationKey)}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 p-4">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {t(image.locationKey)}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {t(image.eventKey)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
}
