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

const NURILOUNGE_IMAGES = [
  '/images/activities/nuriday.jpg',
  '/images/activities/nuriday1.jpg',
  '/images/activities/nuriday2.jpg',
];

export default function NuriloungeActivity() {
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
            {t('activity.nurilounge.title')}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {t('activity.nurilounge.description')}
          </p>
          <Link
            href="https://www.instagram.com/reel/DO5TaTYkrIQ/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            {t('activity.nurilounge.viewOnInstagram')}
            <span>→</span>
          </Link>
        </div>
      </motion.div>

      <motion.div variants={VARIANTS_ITEM} transition={TRANSITION}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {NURILOUNGE_IMAGES.map((image, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden rounded-xl bg-zinc-200 group dark:bg-zinc-800"
            >
              <Image
                src={image}
                alt={`Nurilounge event photo ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
}
