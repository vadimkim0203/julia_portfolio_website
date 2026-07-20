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

export default function ContentStrategyBrandCommunicationProjectPage() {
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

        <div className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">
            {t('project.content-strategy-brand-communication.title')}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {t('project.content-strategy-brand-communication.description')}
          </p>
        </div>
      </motion.div>
    </motion.main>
  );
}
