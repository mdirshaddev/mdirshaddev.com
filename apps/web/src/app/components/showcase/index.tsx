'use client';

import Link from 'next/link';

import clsx from 'clsx';
import { useState } from 'react';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';
import { Details } from './details';
import { Projects } from './projects';

export function Showcase() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className='overflow-hidden bg-black'>
      <article
        className={clsx(
          'w-full max-w-[1200px] mx-auto py-8 md:py-12 lg:py-16'
        )}>
        <div className={clsx('')}>
          <div
            className={clsx('grid grid-cols-1 lg:grid-cols-2 w-full mx-auto')}>
            <div className={clsx('pl-4 md:py-8 lg:py-16 md:pl-6 z-10')}>
              <Link
                href={'/'}
                className='transition-all inline-flex items-centers mb-2 py-2 group hover:px-2 hover:bg-teal-600 hover:rounded-sm'
                onMouseEnter={e => setIsActive(true)}
                onMouseLeave={e => setIsActive(false)}>
                <h1
                  className={clsx(
                    'text-teal-400 group-hover:text-white',
                    'w-full mx-auto cursor-pointer',
                    'text-lg',
                    'font-bold',
                    'flex items-center gap-2',
                    `${isActive ? '' : ''}`
                  )}>
                  Featuring Works{' '}
                  <span className='inline-flex'>
                    {isActive ? <FaArrowRight /> : <FaChevronRight />}
                  </span>
                </h1>
              </Link>
              <p
                className={clsx(
                  'text-white font-bold text-2xl lg:text-3xl xl:text-4xl',
                  'mb-2',
                  'w-full md:max-w-sm lg:max-w-md'
                )}>
                Every component you need is{' '}
                <span className={clsx('text-teal-400')}>
                  ready for production
                </span>
              </p>
              <p
                className={clsx(
                  'leading-relaxed text-lg w-full md:max-w-sm text-white'
                )}>
                Build at an accelerated pace without sacrificing flexibility or
                control
              </p>
              <div className={clsx('mb-8')} />
              <Details />
            </div>
            <div className={clsx('-mx-4 lg:-mx-0 mt-4 pt-8', 'relative')}>
              <div
                className={clsx(
                  'w-full h-[500px] md:h-[650px] xl:h-[832px]',
                  'relative'
                )}>
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
