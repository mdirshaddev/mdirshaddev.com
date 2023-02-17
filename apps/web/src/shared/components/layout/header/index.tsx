'use client';

// Next Link
import Link from 'next/link';

// Next Image
import Image from 'next/image';

// React Icons
import { BsSearch } from 'react-icons/bs';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';
import { SiGithub } from 'react-icons/si';

// React
import { useEffect, useState } from 'react';

// Utilities
import { sayHelloInASCII } from 'src/utilities/msg';

// Class Utility
import clsx from 'clsx';

export default function GlobalHeader() {
  useEffect(() => {
    sayHelloInASCII();
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0',
        'w-full',
        'bg-white dark:bg-dark',
        'backdrop-blur-md', // TODO: Ongoing plan for adding scroll progress animation with header blur animation
        'px-4 md:px-6 lg:px-12 py-4',
        'mx-auto',
        'z-50 shadow-md'
      )}>
      <Header />
    </header>
  );
}

/**
 * Header Component which doesn't have container wrapped around it
 * @returns
 */
export function Header() {
  const navLinks = [
    {
      href: '/blog',
      name: 'Blog',
      id: 'blog'
    },
    {
      href: '/project',
      name: 'Projects',
      id: 'projects'
    },
    {
      href: '/case',
      name: 'Case Studies',
      id: 'case-studies'
    },
    {
      href: '/experiment',
      name: 'Experiments',
      id: 'experiments'
    }
  ];
  return (
    <div
      className={clsx(
        'container mx-auto',
        'flex flex-row items-center justify-between'
      )}>
      <div className='flex flex-row items-center'>
        <div className='flex flex-row items-center'>
          <Image
            src='logo.svg'
            width={50}
            height={50}
            alt='Branding Logo'
            className='cursor-pointer'
          />
          <VersionTag />
        </div>
        <nav className={clsx('hidden xl:block', 'ml-4')}>
          <ul className='flex flex-row items-center'>
            {navLinks.map(({ href, name, id }) => (
              <li
                key={id}
                className={clsx(
                  'px-4 py-1',
                  'mr-2',
                  'text-dark dark:text-white'
                )}>
                <Link
                  className={clsx('flex flex-row items-center', 'font-medium')}
                  href={href}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <SearchBox />
    </div>
  );
}

/**
 * It returns a paragraph element with a bunch of classes
 * @returns A React component for Version tag.
 */
function VersionTag() {
  return (
    <p
      className={clsx(
        'cursor-pointer',
        'text-white',
        'text-[12px] md:text-[12px] font-medium',
        'bg-palette-primary-main',
        'px-2 py-1',
        'ml-4',
        'rounded-md'
      )}>
      v0.0.0
    </p>
  );
}

/* A React component that returns a search box. */
function SearchBox() {
  return (
    <div className={clsx('flex flex-row items-center')}>
      <div
        className={clsx(
          'w-auto md:w-48 h-8',
          'flex flex-row items-center justify-between',
          'cursor-pointer',
          'p-4 md:p-2',
          'bg-transparent md:bg-palette-primary-main',
          'ring-0 md:ring-1 ring-slate-100 dark:ring-slate-900',
          'rounded-md shadow-none md:shadow-md'
        )}>
        <div
          className={clsx(
            'flex flex-row items-center',
            'text-sm font-medium',
            'text-slate-50'
          )}>
          <BsSearch
            className={clsx(
              'w-4 h-4 lg:w-4 lg:h-4',
              'text-palette-primary-main md:text-slate-50',
              'mr-0 md:mr-2'
            )}
          />
          <div className='hidden md:block'>Quick Search...</div>
        </div>
        <div
          className={clsx(
            'hidden md:block',
            'text-[12px] font-bold',
            'text-slate-50',
            'px-1',
            'rounded-sm'
          )}>
          Ctrl K
        </div>
      </div>
      <div
        className={clsx(
          'flex items-center',
          'h-6',
          'ml-2 md:ml-6',
          'border-l border-slate-400 dark:border-slate-600'
        )}>
        <MusicControl />
        <GithubRepo />
      </div>
    </div>
  );
}

/**
 * A React Hooks function that is used to toggle the music icon and control music play.
 *
 * @returns
 */
function MusicControl() {
  const [isEnabled, setIsEnabled] = useState(true);

  const musicControl = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div
      onClick={musicControl}
      className={clsx('flex items-center', 'w-auto h-8', 'p-2', 'ml-2')}>
      {isEnabled ? (
        <HiSpeakerWave className='w-5 h-5 md:w-6 md:h-6 text-palette-primary-main cursor-pointer' />
      ) : (
        <HiSpeakerXMark className='w-5 h-5 md:w-6 md:h-6 text-palette-primary-main cursor-pointer' />
      )}
    </div>
  );
}

/**
 * It returns a link to the project repository
 * @returns A link to the project repository.
 */
function GithubRepo() {
  return (
    <a
      title='Project Repository Link'
      href='https://github.com/mdirshaddev/mdirshaddev.github.io'
      target='_blank'
      rel='noopener'
      className={clsx('flex items-center', 'w-auto h-10', 'p-2', 'ml-2')}>
      <SiGithub
        className={clsx('w-5 h-5 md:w-6 md:h-6', 'text-black dark:text-white')}
      />
    </a>
  );
}
