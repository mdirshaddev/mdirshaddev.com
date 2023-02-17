'use client';

import clsx from 'clsx';
import { FaChevronRight } from 'react-icons/fa';

const swipeListOptions = [
  {
    darkSrc: '/landing/dark/product-advanced-dark.svg',
    lightSrc: '/landing/light/product-advanced-light.svg',
    title: 'Design Toolkits',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '/',
    id: 'design-toolkits',
    active: true
  },
  {
    darkSrc: '/landing/dark/product-core-dark.svg',
    lightSrc: '/landing/light/product-core-light.svg',
    title: 'MUI Core',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '/',
    id: 'mui-core',
    active: false
  },
  {
    darkSrc: '/landing/dark/product-designkits-dark.svg',
    lightSrc: '/landing/light/product-designkits-light.svg',
    title: 'MUI X',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '/',
    id: 'mui-x',
    active: false
  },
  {
    darkSrc: '/landing/dark/product-templates-dark.svg',
    lightSrc: '/landing/light/product-templates-light.svg',
    title: 'Templates',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '/',
    id: 'templates',
    active: false
  }
];

export function MobileList() {
  return (
    <div
      id='mobile-swipeable-view-container'
      className={clsx('block lg:hidden mt-2')}>
      <div className={clsx('flex flex-row', 'overflow-x-hidden', 'pr-[33%]')}>
        {swipeListOptions.map(
          ({ title, darkSrc, lightSrc, href, content, id, active }) => (
            <div
              key={id}
              aria-hidden='false'
              data-swipeable='true'
              className={clsx(
                'w-full md:max-w-md flex-shrink-0 overflow-auto',
                'mr-2'
              )}>
              <button
                tabIndex={0}
                type='button'
                className={clsx(
                  'inline-flex',
                  'w-full',
                  'p-4',
                  'text-left',
                  `${
                    active
                      ? 'bg-palette-primary-main/10 border border-palette-primary-main'
                      : ''
                  }`,
                  'rounded-md'
                )}>
                <span>
                  <span className={clsx('block mr-3 mb-2')}>
                    {/* <Image src={imageSrc} alt='' width={36} height={36} /> */}
                    <picture>
                      <source
                        srcSet={darkSrc}
                        media='(prefers-color-scheme: dark)'
                      />
                      <source
                        srcSet={lightSrc}
                        media='(prefers-color-scheme: light)'
                      />
                      <img
                        decoding='async'
                        src={darkSrc}
                        width='36px'
                        height='36px'
                        alt=''
                      />
                    </picture>
                  </span>
                  <span className={clsx('flex flex-col items-start')}>
                    <span
                      className={clsx(
                        'text-sm text-dark dark:text-white font-bold'
                      )}>
                      {title}
                    </span>
                    <span
                      className={clsx(
                        'text-[0.85rem] text-dark dark:text-white my-1'
                      )}>
                      {content}
                    </span>
                    <a
                      href={href}
                      className={clsx(
                        'flex flex-row items-center leading-normal'
                      )}>
                      <span
                        className={clsx(
                          'text-base font-bold text-palette-primary-main'
                        )}>
                        Learn more
                      </span>
                      <FaChevronRight
                        className={clsx('w-4 h-4', 'text-palette-primary-main')}
                      />
                    </a>
                  </span>
                </span>
                <span className={clsx('touch-ripple')} />
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export function DesktopList() {
  return (
    <div className={clsx('hidden lg:flex flex-col items-start')}>
      {swipeListOptions.map(
        ({ title, darkSrc, lightSrc, href, content, id, active }) => (
          <div
            key={id}
            className={clsx(
              'w-auto flex-shrink-0 overflow-auto',
              `${active ? 'ring-1 ring-white' : ''}`,
              'mb-4'
            )}>
            <button
              tabIndex={0}
              type='button'
              className={clsx(
                'w-full xl:max-w-md',
                'transition-all p-4',
                `${active ? 'bg-palette-primary-main/30 rounded-md' : ''}`,
                'inline-flex text-left'
              )}>
              <span className='flex items-center'>
                <span className={clsx('block mr-3 mb-2')}>
                  <picture>
                    <source
                      srcSet={darkSrc}
                      media='(prefers-color-scheme: dark)'
                    />
                    <source
                      srcSet={lightSrc}
                      media='(prefers-color-scheme: light)'
                    />
                    <img
                      decoding='async'
                      src={darkSrc}
                      width='36px'
                      height='36px'
                      alt=''
                    />
                  </picture>
                </span>
                <span className={clsx('flex flex-col items-start')}>
                  <span
                    className={clsx(
                      'text-sm text-black dark:text-white font-bold'
                    )}>
                    {title}
                  </span>
                  <span
                    className={clsx(
                      'text-[0.85rem] text-black dark:text-white my-1'
                    )}>
                    {content}
                  </span>
                  <a
                    href={href}
                    className={clsx(
                      'flex flex-row items-center leading-normal'
                    )}>
                    <span
                      className={clsx(
                        'text-base font-bold text-palette-primary-main'
                      )}>
                      Learn more
                    </span>
                    <FaChevronRight
                      className={clsx('w-4 h-4', 'text-palette-primary-main')}
                    />
                  </a>
                </span>
              </span>
              <span className={clsx('touch-ripple')} />
            </button>
          </div>
        )
      )}
    </div>
  );
}
