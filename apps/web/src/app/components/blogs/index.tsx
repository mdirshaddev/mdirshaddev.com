'use client';

import clsx from 'clsx';
import {} from 'framer-motion';

export function Blogs() {
  return (
    <section className={clsx('relative overflow-hidden', 'py-8 md:py-16')}>
      {/* Place animated backgrounds or any other effects */}
      <div className='absolute'></div>
      <article className='w-full max-w-[1200px] mx-auto'>
        <h1 className='text-center font-bold text-5xl text-white'>Blogs</h1>
        <p className='text-center mt-4 text-white text-lg md:text-xl'>
          My Curated list of blogs
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className={clsx()}></div>
          <div className={clsx()}></div>
        </div>
      </article>
    </section>
  );
}
