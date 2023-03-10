import clsx from 'clsx';
import Link from 'next/link';
import { FaBlog, FaChevronRight } from 'react-icons/fa';
import { TfiMouse } from 'react-icons/tfi';
import { GoPerson } from 'react-icons/go';
import { SocialLinks } from './social';

export function Hero() {
  return (
    <section className='bg-pixel-grid bg-no-repeat bg-center px-4 md:px-0 relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center mt-[64px]'>
      <div
        className='absolute inset-0 -z-10 overflow-hidden blur-[100px] select-none pointer-events-none -mt-[64px]'
        role='region'>
        <div className='-z-10 absolute mix-blend-lighten opacity-60 left-[60%] top-[40%] w-[800px] h-[800px] bg-purple-600 rounded-full animate-wobblyPurple'></div>
        <div className='-z-20 absolute mix-blend-screen opacity-60 left-[40%] top-[60%] w-[700px] h-[700px] bg-green-600 rounded-full animate-wooblyPink'></div>
        <div className='-z-30 absolute mix-blend-screen opacity-60 left-[50%] top-[50%] w-[600px] h-[600px] bg-teal-600 rounded-full animate-wooblyBlue'></div>
      </div>
      <article className='px-4 xs:py-4 sm:py-10 md:py-20'></article>
    </section>
  );
}
