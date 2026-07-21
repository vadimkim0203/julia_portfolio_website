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

const DESCRIPTION_POINTS = [
  'project.beauty-box-collaboration.point1',
  'project.beauty-box-collaboration.point2',
  'project.beauty-box-collaboration.point3',
  'project.beauty-box-collaboration.point4',
  'project.beauty-box-collaboration.point5',
] as const;

const BEAUTY_BOX_IMAGES = [
  {
    src: '/images/projects/beautyBox.jpg',
    link: 'https://www.instagram.com/reel/DH8GsSvRbbt/',
    linkKey: 'activity.viewOnInstagram',
    objectPosition: 'object-bottom',
  },
  {
    src: '/images/projects/beautyBox1.jpg',
    link: 'https://www.instagram.com/p/DIVzO7Vsylj/',
    linkKey: 'activity.viewOnInstagram',
    objectPosition: 'object-top',
  },
  {
    src: '/images/projects/beautyBox2.jpg',
    link: 'https://www.instagram.com/p/DIVzO7Vsylj/',
    linkKey: 'activity.viewOnInstagram',
    objectPosition: 'object-top',
  },
];

export default function BeautyBoxCollaborationProjectPage() {
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
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <span>←</span>
          <span>{t('projects.back')}</span>
        </Link>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold md:text-4xl">
            {t('project.beauty-box-collaboration.title')}
          </h1>
          <ul className="list-disc space-y-3 pl-5 text-lg text-zinc-600 dark:text-zinc-400">
            {DESCRIPTION_POINTS.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div variants={VARIANTS_ITEM} transition={TRANSITION}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {BEAUTY_BOX_IMAGES.map((image, idx) => (
            <a
              key={image.src}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80"
            >
              <div className="relative aspect-[884/1560] w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={`Beauty box collaboration ${idx + 1}`}
                  fill
                  className={`object-cover ${image.objectPosition}`}
                />
              </div>
              <div className="p-4">
                <p className="inline-flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {t(image.linkKey)}
                  <span>→</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
}
