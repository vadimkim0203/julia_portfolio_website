'use client';
import { motion } from 'motion/react';
import { Spotlight } from '@/components/ui/spotlight';
import {
  MorphingDialog,
  MorphingDialogTrigger,
} from '@/components/ui/morphing-dialog';
import { PROJECTS, WORK_EXPERIENCE, SOCIAL_LINKS, EDUCATION } from './data';
import { TextEffect } from '@/components/ui/text-effect';
import Image from 'next/image';
import Link from 'next/link';
import MagneticSocialLink from '@/components/MagneticSocialLink';
import MagneticSkills from '@/components/MagneticSkills';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { parseDescription } from '@/lib/parseDescription';

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
  hidden: { opacity: 0, y: 10, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const TRANSITION_SECTION = {
  duration: 0.3,
};

type ProjectVideoProps = {
  src: string;
};

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-[9/16] w-full max-h-[560px] cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
    </MorphingDialog>
  );
}

export default function Home() {
  const { t, locale } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
        <div className="flex flex-col items-center pt-10">
          <div className="flex flex-col items-center justify-center">
            <div className="mx-auto my-5 block rounded-full aspect-square w-[160px] h-[160px] overflow-hidden">
              <Image
                src="/images/avatar.jpg"
                alt="Profile photo"
                className="w-full h-full object-cover object-[center_30%] rounded-full bg-gray-100 grayscale hover:grayscale-0 sm:float-right"
                unoptimized
                width={160}
                height={160}
                priority
              />
            </div>
            <h1 className="text-2xl font-medium tracking-tight">{t('name')}</h1>
            <TextEffect
              as="p"
              preset="fade"
              per="char"
              className="pt-1 text-zinc-600 dark:text-zinc-500"
              delay={0.5}
              key={`specialty=${t('specialty')}`}
            >
              {t('specialty')}
            </TextEffect>
          </div>
          <div className="mt-4 flex items-center justify-start space-x-3">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink
                key={link.label}
                link={link.link}
                icon={link.icon}
              >
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </div>

        <div className="mt-10 flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">{t('greetings')}</p>
          <p className="pt-4 text-zinc-600 dark:text-zinc-400">
            {t('introduction')}
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">{t('headerWork')}</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <button
              onClick={() => toggleExpand(job.id)}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30 text-left w-full hover:bg-zinc-300/50 dark:hover:bg-zinc-600/50 transition-colors"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between items-center">
                  <div className="flex-1">
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title[locale]}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company[locale]}
                    </p>
                  </div>
                  <div className="flex-col items-end hidden sm:flex">
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {job.start[locale]} - {job.end[locale]}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {job.location[locale]}
                    </p>
                  </div>
                  <div className="ml-4 text-zinc-600 dark:text-zinc-400 transition-transform">
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedId === job.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>

                {expandedId === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800"
                  >
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {parseDescription(job.description[locale])}
                    </p>
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
                    >
                      Visit Company →
                    </a>
                  </motion.div>
                )}
              </div>
            </button>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">{t('headerEducation')}</h3>
        <div className="flex flex-col space-y-2">
          {EDUCATION.map((university) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={university.link}
              target="_blank"
              rel="noopener noreferrer"
              key={university.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {university.degree[locale]}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {university.name[locale]}
                    </p>
                  </div>

                  <div className="flex-col items-end hidden sm:flex">
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {university.start[locale]} - {university.end[locale]}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {university.location[locale]}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">{t('headerProjects')}</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectVideo src={project.video} />
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link
          className="mt-8 font-base group relative inline-block font-[450] text-zinc-600 dark:text-zinc-50"
          href="/projects"
        >
          {t('allProjects')} →
          <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
        </Link>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">{t('headerSkills')}</h3>
        <MagneticSkills />
      </motion.section>
    </motion.main>
  );
}
