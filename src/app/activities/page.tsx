'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { PUBLICATION_LIST, ACTIVITY_LIST } from '@/app/data';
import { useLanguage } from '@/context/LanguageContext';

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const TRANSITION_SECTION = {
  duration: 0.3,
};

const ACTIVITY_ROUTES: Record<string, string> = {
  'activity-1': '/activities/uniqlo',
  'activity-2': '/activities/amos-workshop',
  'activity-3': '/activities/mongolia-field-trip',
  'activity-4': '/activities/nurilounge',
  'activity-5': '/activities/beauty-exhibition',
  'activity-6': '/activities/creative-content-production',
  'activity-7': '/activities/miguhara-content-strategy-brand-communication',
  'publication-1': '/activities/codeseoul',
  'publication-2': '/activities/supabase',
};

export default function Activities() {
  const { t } = useLanguage();

  const getActivityTitle = (activity: { title: string; titleKey?: string }) =>
    activity.titleKey ? t(activity.titleKey) : activity.title;

  // Combine all activities
  const allActivities = [
    ...ACTIVITY_LIST.filter((activity) => activity.uid !== 'activity-4').map((activity) => ({
      ...activity,
      type: 'photo',
      href: ACTIVITY_ROUTES[activity.uid],
    })),
    ...PUBLICATION_LIST.map((publication) => ({
      uid: publication.uid,
      title: publication.title,
      description: publication.title,
      type: 'publication',
      href: ACTIVITY_ROUTES[publication.uid],
    })),
  ];

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 pt-6 text-xl font-medium">{t('activities.title')}</h3>
        <div className="flex flex-col space-y-3">
          {allActivities.map((activity) => (
            <Link
              key={activity.uid}
              href={activity.href}
              className="rounded-lg bg-zinc-100 dark:bg-zinc-900/80 p-6 hover:bg-zinc-200 dark:hover:bg-zinc-800/80 transition-colors duration-200"
            >
              <div className="flex flex-col space-y-1">
                <h4 className="text-base font-medium dark:text-zinc-100">
                  {getActivityTitle(activity)}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}
