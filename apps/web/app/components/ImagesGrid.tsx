import clsx from 'clsx';

import { RxExit } from 'react-icons/rx';

export function ImagesGrid() {
  const leftImageList = [
    {
      darkSrc: '/landing/dark/projects/template-1dark.jpg',
      lightSrc: '/landing/light/projects/template-1light.jpg',
      href: '',
      id: 'template-1.jpg'
    },
    {
      darkSrc: '/landing/dark/projects/template-2dark.jpg',
      lightSrc: '/landing/light/projects/template-2light.jpg',
      href: '',
      id: 'template-2.jpg'
    },
    {
      darkSrc: '/landing/dark/projects/template-3dark.jpg',
      lightSrc: '/landing/light/projects/template-3light.jpg',
      href: '',
      id: 'template-3.jpg'
    }
  ];
  const rightImageList = [
    {
      darkSrc: '/landing/dark/projects/template-4dark.jpg',
      lightSrc: '/landing/light/projects/template-4light.jpg',
      href: '',
      id: 'template-4.jpg'
    },
    {
      darkSrc: '/landing/dark/projects/template-5dark.jpg',
      lightSrc: '/landing/light/projects/template-5light.jpg',
      href: '',
      id: 'template-5.jpg'
    },
    {
      darkSrc: '/landing/dark/projects/template-6dark.jpg',
      lightSrc: '/landing/light/projects/template-6light.jpg',
      href: '',
      id: 'template-6.jpg'
    }
  ];
  return (
    <>
      <div className='grid grid-row-1 gap-10 lg:gap-12'>
        {leftImageList.map(({ id, darkSrc, lightSrc, href }) => (
          <a
            key={id}
            href={href}
            rel='noopener'
            target='_blank'
            className={clsx(
              'group w-[250px] h-min p-[6px] sm:w-[250px] xl:w-[400px] bg-slate-200 dark:bg-slate-800 rounded-md'
            )}>
            <picture className='relative'>
              <source srcSet={darkSrc} media='(prefers-color-scheme: dark)' />
              <source srcSet={lightSrc} media='(prefers-color-scheme: light)' />
              <img decoding='async' src={lightSrc} alt={id} />
              <div
                className={clsx(
                  'transition-all absolute top-0 left-0 w-full h-full group-hover:bg-palette-primary-main/50',
                  'flex flex-row items-center justify-center'
                )}>
                <p className='text-white font-bold underline hidden group-hover:flex flex-row items-center'>
                  Go to Website <RxExit className='w-6 h-6 ml-2' />
                </p>
              </div>
            </picture>
          </a>
        ))}
      </div>
      <div className='grid grid-row-1 ml-8 mt-16 lg:ml-16 gap-10 lg:gap-12'>
        {rightImageList.map(({ id, darkSrc, lightSrc, href }) => (
          <a
            key={id}
            href={href}
            rel='noopener'
            target='_blank'
            className={clsx(
              'group w-[250px] h-auto p-[6px] sm:w-[250px] xl:w-[400px] bg-slate-200 dark:bg-slate-800 rounded-md'
            )}>
            <picture className='relative'>
              <source srcSet={darkSrc} media='(prefers-color-scheme: dark)' />
              <source srcSet={lightSrc} media='(prefers-color-scheme: light)' />
              <img decoding='async' src={lightSrc} alt={id} />
              <div
                className={clsx(
                  'transition-all absolute top-0 left-0 w-full h-full group-hover:bg-palette-primary-main/50',
                  'flex flex-row items-center justify-center'
                )}>
                <p className='text-white font-bold underline hidden group-hover:flex flex-row items-center'>
                  Go to Website <RxExit className='w-6 h-6 ml-2' />
                </p>
              </div>
            </picture>
          </a>
        ))}
      </div>
    </>
  );
}
