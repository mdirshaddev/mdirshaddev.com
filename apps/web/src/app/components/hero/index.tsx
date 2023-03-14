import Link from 'next/link';
import { TfiMouse } from 'react-icons/tfi';
import { SocialLinks } from './social';

export function Hero() {
  return (
    <section className='bg-pixel-grid bg-no-repeat bg-center px-4 sm:px-6 md:px-0 relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center mt-[64px]'>
      <div
        className='absolute inset-0 -z-10 overflow-hidden blur-[100px] select-none pointer-events-none -mt-[64px]'
        role='region'>
        <div className='-z-10 absolute mix-blend-lighten opacity-60 left-[60%] top-[40%] w-[800px] h-[800px] bg-purple-600 rounded-full animate-wobblyPurple'></div>
        <div className='-z-20 absolute mix-blend-screen opacity-60 left-[40%] top-[60%] w-[700px] h-[700px] bg-green-600 rounded-full animate-wooblyPink'></div>
        <div className='-z-30 absolute mix-blend-screen opacity-60 left-[50%] top-[50%] w-[600px] h-[600px] bg-teal-600 rounded-full animate-wooblyBlue'></div>
      </div>
      <article className='w-full max-w-[1200px] sm:py-10 md:py-20'>
        <div className='px-0 md:px-8 lg:px-6'>
          <h1 className='font-semibold text-2xl md:text-4xl 2xl:text-5xl text-white'>
            Hi!
          </h1>
          <p className='font-semibold mt-1 text-3xl md:text-5xl 2xl:text-6xl text-white'>
            I&apos;m <span className='text-teal-400'>Md Irshad</span>
          </p>
          <p className='class="font-medium mt-4 max-w-2xl text-white md:mt-6 md:text-lg 2xl:text-xl"'>
            I work with React Ecosystem, and write to teach people how to
            rebuild and redefine fundamental concepts through mental models.
          </p>
          <p className='mt-3 max-w-4xl leading-relaxed text-white md:mt-4 md:text-lg 2xl:text-xl'>
            Don&apos;t forget to sign my{' '}
            <Link
              className='inline-flex items-center font-medium focus:outline-none focus-visible:ring focus-visible:ring-teal-300 border-b border-dotted border-dark hover:border-black/0'
              href='/guestbook'>
              <span className='bg-gradient-to-tr from-teal-300 dark:to-teal-400 bg-clip-text text-transparent'>
                guestbook
              </span>
            </Link>
          </p>
          <div className='gap-4 flex flex-wrap sm:flex-nowrap items-center mt-4'>
            <button className='ring-1 ring-white px-4 py-2 rounded-sm bg-white text-[#0d1117] font-bold shadow-md'>
              Read blog
            </button>
            <button className='ring-1 ring-white px-4 py-2 rounded-sm bg-[#0d1117] text-white font-bold shadow-md'>
              More About me
            </button>
          </div>
          <SocialLinks />
        </div>
      </article>
      <TfiMouse className='absolute bottom-6 text-white w-8 h-8 lg:w-10 lg:h-10 animate-bounce' />
    </section>
  );
}
