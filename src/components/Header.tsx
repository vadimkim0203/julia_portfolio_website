'use client';

import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './locale/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

function Header() {
  const [mounted, setMounted] = useState(false);
  const { t, locale } = useLanguage();

  const TABS = [
    { nameKey: 'navigation.home', link: '/' },
    { nameKey: 'navigation.projects', link: '/projects' },
    { nameKey: 'navigation.activities', link: '/activities' },
    { nameKey: 'navigation.contact', link: '/contact' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <header className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-bold text-black text-2xl dark:text-white">
          <Link href="/">Yuliya Ten</Link>
        </div>
        {mounted && (
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              {TABS.map((tab, index) => (
                <Link
                  href={tab.link}
                  key={index}
                  type="button"
                  className="px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {t(tab.nameKey)}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <LanguageSwitcher />
          </div>
        )}
      </header>
      
      {mounted && (
        <nav className="sm:hidden flex flex-wrap gap-2 pb-4">
          {TABS.map((tab, index) => (
            <Link
              href={tab.link}
              key={index}
              className="px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors border border-zinc-300 dark:border-zinc-700 rounded-lg"
            >
              {t(tab.nameKey)}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}

export default Header;
