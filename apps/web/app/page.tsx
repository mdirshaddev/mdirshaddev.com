// Next.js
import Link from 'next/link';

// React
import { Fragment } from 'react';

// Class Utility
import clsx from 'clsx';

import {
  TechStack,
  DesktopList,
  MobileList,
  SocialLinks,
  Initials,
  ImagesGrid
} from './components';

//TODO: Hero Section new modification for this might need to extend media queries in tailwind configuration
//TODO: Fixing the images width and height as per the preferred device width and height viewports

export default async function Page() {
  return (
    <Fragment>
      <section className={clsx('w-full h-auto', '', 'flex flex-col', 'mt-16')}>
        <article
          className={clsx(
            'relative',
            'w-full h-auto',
            'grid grid-cols-1',
            'px-4 py-8 lg:px-12 xl:py-20',
            'container mx-auto',
            'mb-4'
          )}>
          <div className={clsx('py-0 md:py-12')}>
            <p
              className={clsx(
                'text-3xl md:text-5xl 2xl:text-6xl',
                'text-center lg:text-left',
                'text-gray-700 dark:text-gray-200'
              )}>
              Hi, I'm{' '}
              <span
                className={clsx(
                  'font-bold',
                  'text-palette-primary-main',
                  'animated-underline'
                )}>
                Md Irshad
              </span>
            </p>
            <p
              className={clsx(
                'max-w-md mx-auto lg:mx-0',
                'text-center lg:text-left',
                'leading-relaxed',
                'text-base md:text-lg 2xl:text-xl',
                'text-gray-700 dark:text-gray-200',
                'mt-4 md:mt-6'
              )}>
              I work with Node and React Ecosystem, and write to teach people
              how to rebuild and redefine fundamental concepts through mental
              models.
            </p>
            <p
              className={clsx(
                'max-w-4xl',
                'mt-3 md:mt-4',
                'text-center lg:text-left',
                'leading-relaxed',
                'text-base md:text-lg 2xl:text-xl',
                'text-gray-700 dark:text-gray-200'
              )}>
              Don't forget to sign my{' '}
              <a
                className={clsx(
                  'inline-flex items-center',
                  'font-medium',
                  'animated-underline',
                  'border-b border-dotted',
                  'border-dark hover:border-black/0',
                  'focus:outline-none',
                  'focus-visible:ring focus-visible:ring-palette-primary',
                  'custom-link'
                )}
                href='/'>
                <span
                  className={clsx(
                    'bg-gradient-to-tr from-palette-primary-main to-palette-primary-main bg-clip-text text-transparent',
                    'dark:bg-gradient-to-tr dark:from-palette-primary-main dark:to-palette-primary-main dark:bg-clip-text dark:text-transparent'
                  )}>
                  guestbook
                </span>
              </a>
              !
            </p>
            <div
              className={clsx(
                'flex flex-col',
                'mt-2',
                'text-center lg:text-start',
                'leading-relaxed',
                'text-base md:text-lg 2xl:text-xl',
                'text-gray-700 dark:text-gray-200',
                'gap-4'
              )}>
              <p className={clsx('text-dark dark:text-white')}>
                My Favourite Tech Stack
              </p>
              <TechStack />
            </div>
            <div
              className={clsx(
                'flex flex-wrap items-center justify-center lg:justify-start gap-4',
                'mt-8'
              )}>
              <div className='group relative'>
                <div className='absolute -inset-0.5 animate-tilt rounded blur bg-gradient-to-r from-palette-primary to-palette-primary dark:from-palette-primary dark:via-palette-primary opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'></div>
                <Link
                  className='inline-flex rounded px-4 py-2 font-bold border border-gray-300 shadow-sm dark:border-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-palette-primary scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90 transition duration-100 animate-shadow bg-white text-gray-800 disabled:bg-gray-200 dark:bg-black dark:text-gray-100 dark:disabled:bg-gray-700'
                  href='/'>
                  Read the blog
                </Link>
              </div>
              <Link
                className='inline-flex rounded px-4 py-2 font-bold border border-gray-300 shadow-sm dark:border-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-palette-primary scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90 transition duration-100 animate-shadow bg-white text-gray-800 disabled:bg-gray-200 dark:bg-black dark:text-gray-100 dark:disabled:bg-gray-700'
                href='/about'>
                Learn more about me
              </Link>
            </div>
            <SocialLinks />
          </div>
          <Initials />
        </article>
      </section>
      <section
        className={clsx(
          'w-full h-auto',
          'flex flex-col',
          'bg-palette-primary-main/20',
          'pt-12 md:pt-20 lg:py-36',
          'overflow-hidden'
        )}>
        <article className={clsx('w-full h-auto', 'flex flex-col', 'mx-auto')}>
          <h1
            className={clsx(
              'text-palette-primary-main',
              'container mx-auto',
              'px-4 md:px-6 lg:px-12',
              'font-bold'
            )}>
            Featured Projects
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[0.75fr_1.25fr] container mx-auto'>
            <div
              // Content Area
              className={clsx(
                'pl-4 md:pl-6 lg:pl-12',
                'container mx-auto',
                'px-4 md:px-6 lg:px-12',
                'z-10'
              )}>
              <p
                className={clsx(
                  'text-black dark:text-white font-bold text-2xl',
                  'mb-2',
                  'w-full md:max-w-sm'
                )}>
                Every component you need is{' '}
                <span className={clsx('text-palette-primary-main')}>
                  ready for production
                </span>
              </p>
              <p
                className={clsx(
                  'leading-relaxed w-full md:max-w-sm text-black dark:text-white'
                )}>
                Build at an accelerated pace without sacrificing flexibility or
                control
              </p>
              <div className={clsx('mb-8')} />
              <MobileList />
              <DesktopList />
            </div>
            <div
              // Canvas Asread
              className={clsx('-mx-4 lg:-mx-0 mt-4 lg:mt-0', 'relative')}>
              <div className={clsx('w-full h-[650px]', 'relative')}>
                <div
                  style={{
                    perspective: '1000px',
                    height: 'calc(100vh + 160px)'
                  }}
                  className={clsx('relative -my-0 lg:-my-[120px]')}>
                  <div
                    style={{
                      transform:
                        'translateX(-40%) rotateZ(-30deg) rotateX(8deg) rotateY(8deg)',
                      transformOrigin: 'center center'
                    }}
                    className={clsx(
                      'absolute -z-10 flex left-[43%] lg:left-[55%] xl:left-[60%]'
                    )}>
                    <ImagesGrid />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section
        className={clsx(
          'w-full h-auto',
          'flex flex-col',
          'pt-12',
          'overflow-hidden'
        )}>
        <article className={clsx('')}>
          <h1></h1>
        </article>
      </section>
    </Fragment>
  );
}
