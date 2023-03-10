'use client';

import clsx from 'clsx';
import {} from 'framer-motion';

export function Library() {
  return (
    <section
      className={clsx(
        'relative overflow-hidden',
        'px-4 md:px-6 py-8 md:py-16'
      )}>
      {/* Place animated backgrounds or any other effects */}
      <div className='absolute'></div>
      <article className='w-full max-w-[1200px] mx-auto'>
        <h1 className='text-left font-bold text-5xl text-white'>Library</h1>
        <p className='text-left mt-4 text-white text-lg md:text-xl'>
          A collection on all the things i do in daily life
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className={clsx()}></div>
          <div className={clsx()}></div>
        </div>
      </article>
    </section>
  );
}
