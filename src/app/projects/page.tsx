'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/app/data';
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

function Projects() {
  const { t } = useLanguage();

  const projectEntries = [
    {
      uid: 'project-nurilounge',
      title: t('activity.nurilounge.title'),
      description: t('activity.nurilounge.description'),
      link: '/projects/nurilounge',
    },
    {
      uid: 'project-influencer-marketing',
      title: t('project.influencer-marketing.title'),
      description: t('project.influencer-marketing.description'),
      link: '/projects/influencer-marketing',
    },
    {
      uid: 'project-retail-promotion',
      title: t('project.retail-promotion.title'),
      description: t('project.retail-promotion.description'),
      link: '/projects/retail-promotion',
    },
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
        <h3 className="mb-3 pt-6 text-xl font-medium">Projects</h3>
        {/* <p className="mb-5 text-zinc-600 dark:text-zinc-400">Coming soon!</p> */}

        <div className="flex flex-col space-y-3">
          {[...projectEntries, ...BLOG_POSTS].map((post) => (
            <Link
              key={post.uid}
              target={post.link.startsWith('http') ? '_blank' : undefined}
              rel={post.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="rounded-lg bg-zinc-100 p-6 transition-colors duration-200 hover:bg-zinc-200 dark:bg-zinc-900/80 dark:hover:bg-zinc-800/80"
              href={post.link}
              data-id={post.uid}
            >
              <div className="flex flex-col space-y-1">
                <h4 className="text-base font-medium dark:text-zinc-100">
                  {post.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}

export default Projects;
