'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { AnimatedBackground } from '@/components/ui/animated-background';
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
        <h3 className="mb-3 text-lg font-medium pt-6">Projects</h3>
        {/* <p className="mb-5 text-zinc-600 dark:text-zinc-400">Coming soon!</p> */}

        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {[...projectEntries, ...BLOG_POSTS].map((post) => (
              <Link
                key={post.uid}
                target={post.link.startsWith('http') ? '_blank' : undefined}
                rel={post.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>
    </motion.main>
  );
}

export default Projects;
