'use client';

import clsx from 'clsx';

import { RxExit } from 'react-icons/rx';

export function Projects() {
  const leftImageList = [
    {
      src: '/landing/dark/projects/template-1dark.jpg',
      href: '',
      id: 'template-1.jpg'
    },
    {
      src: '/landing/dark/projects/template-2dark.jpg',
      href: '',
      id: 'template-2.jpg'
    },
    {
      src: '/landing/dark/projects/template-3dark.jpg',
      href: '',
      id: 'template-3.jpg'
    }
  ];
  const rightImageList = [
    {
      src: '/landing/dark/projects/template-4dark.jpg',
      href: '',
      id: 'template-4.jpg'
    },
    {
      src: '/landing/dark/projects/template-5dark.jpg',

      href: '',
      id: 'template-5.jpg'
    },
    {
      src: '/landing/dark/projects/template-6dark.jpg',
      href: '',
      id: 'template-6.jpg'
    }
  ];
  return (
    <div
      style={{
        perspective: '1000px'
      }}
      className={clsx('relative h-full -my-0 lg:-my-28')}>
      <div
        style={{
          transform:
            'translateX(-40%) rotateZ(-30deg) rotateX(8deg) rotateY(8deg)',
          transformOrigin: 'center center'
        }}
        className={clsx('absolute -z-10 flex left-[43%] lg:left-[60%]')}>
        <div className='grid grid-row-1 gap-10 lg:gap-12'>
          {leftImageList.map(({ id, src, href }) => (
            <a
              key={id}
              href={href}
              rel='noopener'
              target='_blank'
              className={clsx(
                'group w-[250px] h-min p-1 sm:w-[300px] xl:w-[450px] bg-slate-800 rounded-md'
              )}>
              <picture className='relative'>
                <img decoding='async' src={src} alt={id} />
                <div
                  className={clsx(
                    'transition-all absolute top-0 left-0 w-full h-full group-hover:bg-teal-400/20',
                    'flex flex-row items-center justify-center cursor-newtab'
                  )}>
                  <p className='text-white font-bold underline hidden group-hover:flex flex-row items-center'>
                    Go to Website <RxExit className='w-6 h-6 ml-2' />
                  </p>
                </div>
              </picture>
            </a>
          ))}
        </div>
        <div className='grid grid-row-1 ml-12 mt-16 lg:ml-16 gap-10 lg:gap-12'>
          {rightImageList.map(({ id, src, href }) => (
            <a
              key={id}
              href={href}
              rel='noopener'
              target='_blank'
              className={clsx(
                'group w-[250px] h-min p-1 sm:w-[300px] xl:w-[450px] bg-slate-800 rounded-md'
              )}>
              <picture className='relative'>
                <img decoding='async' src={src} alt={id} />
                <div
                  className={clsx(
                    'transition-all absolute top-0 left-0 w-full h-full group-hover:bg-teal-400/20',
                    'flex flex-row items-center justify-center cursor-newtab'
                  )}>
                  <p className='text-white font-bold underline hidden group-hover:flex flex-row items-center'>
                    Go to Website <RxExit className='w-6 h-6 ml-2' />
                  </p>
                </div>
              </picture>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
