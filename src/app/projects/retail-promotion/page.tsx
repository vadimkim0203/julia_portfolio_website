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

const RETAIL_PROMOTION_IMAGES = [
  {
    src: '/images/projects/offlineRetailGa1.png',
    alt: 'Offline retail promotion campaign visual 1',
  },
  {
    src: '/images/projects/offlineRetailGa2.png',
    alt: 'Offline retail promotion campaign visual 2',
  },
];

export default function RetailPromotionProjectPage() {
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
            {t('project.retail-promotion.title')}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {t('project.retail-promotion.description')}
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={VARIANTS_ITEM}
        transition={TRANSITION}
        className="mx-auto w-full max-w-7xl"
      >
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden">
            <a
              href="https://goldapple.ru/brands/miguhara"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-transparent md:aspect-[20/11] lg:aspect-[24/13]">
                <Image
                  src={RETAIL_PROMOTION_IMAGES[0].src}
                  alt={RETAIL_PROMOTION_IMAGES[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain"
                />
              </div>
            </a>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <a
                href="https://goldapple.ru/brands/miguhara"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
              >
                <span>Gold Apple / MIGUHARA</span>
              </a>
            </div>
          </div>

          <div className="overflow-hidden">
            <a
              href="https://www.youtube.com/watch?v=JwvjV-5JN24"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-transparent md:aspect-[20/11] lg:aspect-[24/13]">
                <Image
                  src={RETAIL_PROMOTION_IMAGES[1].src}
                  alt={RETAIL_PROMOTION_IMAGES[1].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-contain"
                />
              </div>
            </a>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <a
                href="https://www.youtube.com/watch?v=JwvjV-5JN24"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
              >
                <span>Miguhara x Gold Apple</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
}
