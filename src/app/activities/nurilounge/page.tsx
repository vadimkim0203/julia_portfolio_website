'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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

const NURILOUNGE_MEDIA = [
  '/videos/nuriday2.mp4',
  '/images/activities/nuriday1.jpg',
];

export default function NuriloungeActivity() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isProjectsRoute = pathname?.startsWith('/projects');

  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={VARIANTS_ITEM} transition={TRANSITION}>
        <Link
          href={isProjectsRoute ? '/projects' : '/activities'}
          className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors mb-8"
        >
          <span>←</span>
          <span>{isProjectsRoute ? t('projects.back') : t('activities.back')}</span>
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
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 sm:gap-5">
          {NURILOUNGE_MEDIA.map((src, idx) =>
            src.endsWith('.mp4') ? (
              <video
                key={idx}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="mx-auto max-h-[43.2vh] w-auto max-w-full"
              >
                <source src={src} type="video/mp4" />
              </video>
            ) : (
              <Image
                key={idx}
                src={src}
                alt={`Nurilounge event photo ${idx + 1}`}
                width={3760}
                height={2354}
                sizes="(min-width: 640px) 320px, 100vw"
                className="mx-auto h-auto max-h-[36vh] w-auto max-w-full object-contain"
              />
            ),
          )}
        </div>
      </motion.div>
    </motion.main>
  );
}
