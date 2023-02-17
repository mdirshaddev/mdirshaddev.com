'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { PropsWithChildren, useState } from 'react';

export default function Search() {
  return (
    <Container>
      <SearchPrompt />
    </Container>
  );
}

export function SearchPrompt() {
  return (
    <>
      <SearchPromptHeader />
      <SearchPromptBody />
      <SearchPromptFooter />
    </>
  );
}

function Container(props: PropsWithChildren) {
  return (
    <div
      id='search-prompt-container'
      className={clsx(
        'w-screen h-screen',
        'fixed inset-0 z-prompt',
        'bg-black/20 dark:bg-white/20',
        'backdrop-blur-sm',
        'p-4 md:p-[10vh] lg:p-[12vh]',
        'flex flex-col',
        'hidden'
      )}>
      <div
        className={clsx(
          'w-full max-w-xl mx-auto',
          'bg-white dark:bg-dark shadow-prompt-light dark:shadow-prompt-dark',
          'rounded-md'
        )}>
        {props.children}
      </div>
    </div>
  );
}

function SearchPromptHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  return (
    <header
      id='search-prompt-header'
      className={clsx(
        'flex flex-row items-center',
        'px-4 border-b',
        'dark:border-[#e2e8f00d]'
      )}>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(e);
          setIsLoading(true);
        }}
        className={clsx('w-full flex items-center')}>
        <label
          htmlFor=''
          className={clsx(`${isLoading ? 'hidden' : 'w-6 h-6 flex'}`)}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m19 19-3.5-3.5' stroke='%2394a3b8' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/%3E%3Ccircle cx='11' cy='11' r='6' stroke='%2394a3b8' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E")`
          }}
        />
        <div className={clsx(isLoading ? 'flex w-6 h-6' : 'hidden')}>
          <svg
            viewBox='0 0 38 38'
            className='text-palette-primary-main'
            stroke='currentColor'
            strokeOpacity='.5'>
            <g fill='none' fillRule='evenodd'>
              <g transform='translate(1 1)' strokeWidth='2'>
                <circle strokeOpacity='.3' cx='18' cy='18' r='18'></circle>
                <path d='M36 18c0-9.94-8.06-18-18-18'>
                  <animateTransform
                    attributeName='transform'
                    type='rotate'
                    from='0 18 18'
                    to='360 18 18'
                    dur='1s'
                    repeatCount='indefinite'></animateTransform>
                </path>
              </g>
            </g>
          </svg>
        </div>
        <input // TODO: Handle Input for Search
          title=''
          className={clsx(
            'flex-1 w-full mx-2 px-2 h-14 font-medium bg-transparent min-w-0 appearance-none text-slate-800 dark:text-slate-400',
            'text-[0.875rem]'
          )}
          placeholder='Search...'
          type='search'
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          maxLength={40}
        />
      </form>
      <button
        type='reset'
        aria-label='ESC'
        className={clsx(
          'w-7 h-5',
          'bg-white dark:bg-dark border border-[#adbdd4]',
          'bg-no-repeat',
          'bg-[50%]',
          'rounded-md',
          ''
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.506 6h3.931V4.986H1.736v-1.39h2.488V2.583H1.736V1.196h2.69V.182H.506V6ZM8.56 1.855h1.18C9.721.818 8.87.102 7.574.102c-1.276 0-2.21.705-2.205 1.762-.003.858.602 1.35 1.585 1.585l.634.159c.633.153.986.335.988.727-.002.426-.406.716-1.03.716-.64 0-1.1-.295-1.14-.878h-1.19c.03 1.259.931 1.91 2.343 1.91 1.42 0 2.256-.68 2.259-1.745-.003-.969-.733-1.483-1.744-1.71l-.523-.125c-.506-.117-.93-.304-.92-.722 0-.375.332-.65.934-.65.588 0 .949.267.994.724ZM15.78 2.219C15.618.875 14.6.102 13.254.102c-1.537 0-2.71 1.086-2.71 2.989 0 1.898 1.153 2.989 2.71 2.989 1.492 0 2.392-.992 2.526-2.063l-1.244-.006c-.117.623-.606.98-1.262.98-.883 0-1.483-.656-1.483-1.9 0-1.21.591-1.9 1.492-1.9.673 0 1.159.389 1.253 1.028h1.244Z' fill='%2394a3b8'/%3E%3C/svg%3E")`
        }}
      />
    </header>
  );
}

function SearchPromptBody() {
  return (
    <div
      id='search-prompt-body'
      // Dropdown
      className={clsx('')}>
      <div
        // StartScreen
        className={clsx('')}>
        <p className={clsx('py-16 px-6', 'text-center', 'text-[#94a3b8]')}>
          No Search Results
        </p>
      </div>
    </div>
  );
}

function SearchPromptFooter() {
  return (
    <footer
      id='search-prompt-footer'
      className={clsx(
        'flex flex-row justify-end',
        'border-t',
        'dark:border-[#e2e8f00d]',
        'p-4'
      )}>
      <div>
        <a
          className={clsx('flex flex-row items-center')}
          href=''
          target='_blank'
          rel='noopener'>
          <span className={clsx('text-sm', 'text-[#94a3b8]', 'mr-2')}>
            Search by
          </span>
          <Image src='/logo.svg' width={25} height={25} alt='' />
          <span
            className={clsx('text-sm', 'text-dark dark:text-white', 'ml-2')}>
            @mdirshaddev
          </span>
        </a>
      </div>
    </footer>
  );
}
