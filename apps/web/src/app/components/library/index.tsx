'use client';

import clsx from 'clsx';
import {} from 'framer-motion';
import Image from 'next/image';

export function Library() {
  return (
    <section
      className={clsx(
        'relative overflow-hidden',
        'bg-[#0d1117] bg-footer-galaxy bg-no-repeat bg-cover',
        'h-[980px]',
        'px-4 md:px-6 py-10 md:py-20'
      )}>
      {/* Place animated backgrounds or any other effects */}
      <div className='absolute'></div>
      <article className='w-full max-w-[1200px] mx-auto py-5 md:py-20'>
        <h1 className='text-left font-bold text-5xl text-white'>Library</h1>
        <p className='text-left mt-4 text-white text-lg md:text-xl'>
          A collection on all the things i do in daily life
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className={clsx()}></div>
          <div className={clsx()}></div>
        </div>
      </article>
      <div className='absolute left-0 bottom-0 w-full'>
        <Image
          className='mx-auto'
          src='/astrocat.png'
          width={400}
          height={403}
          alt='Looking into space'
        />
      </div>
    </section>
  );
}
