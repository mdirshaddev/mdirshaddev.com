import clsx from 'clsx';

import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

export function GlobalHeader() {
  return (
    <header
      className={clsx(
        'fixed',
        'top-0 left-0',
        'w-screen h-[64px]',
        'backdrop-blur-3xl',
        'z-globalHeader'
      )}>
      <div
        className={clsx(
          'w-full max-w-[1200px]',
          'mx-auto h-full',
          'px-4 md:px-8 lg:px-6 py-2',
          'flex flex-row items-center justify-between'
        )}>
        <div className='flex flex-row items-center'>
          <div className='flex flex-row items-center'>
            {/* <Image src='/logo.svg' width={50} height={50} alt='Logo' />{' '} */}
            <Link className='font-semibold text-lg text-teal-400' href={'/'}>
              @mdirshaddev
            </Link>
            <span className='ml-2 bg-white py-[2px] px-2 font-semibold rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm'>
              v0.0.0
            </span>
          </div>
          <nav className='hidden md:block ml-6'>
            <ul className='flex flex-row items-center'>
              <li className='mx-2'>
                <button className='transition-all text-sm md:text-lg flex flex-row items-center gap-1 text-slate-100 font-semibold hover:text-slate-50 hover:bg-[#ffffff4d] hover:rounded-3xl px-3 py-1'>
                  Blogs
                  <ChevronDown />
                </button>
              </li>
              <li className='mx-2'>
                <button className='transition-all text-sm md:text-lg flex flex-row items-center gap-1 text-slate-100 font-semibold hover:text-slate-50 hover:bg-[#ffffff4d] hover:rounded-3xl px-3 py-1'>
                  Projects
                  <ChevronDown />
                </button>
              </li>
              <li className='mx-2'>
                <button className='transition-all text-sm md:text-lg flex flex-row items-center gap-1 text-slate-100 font-semibold hover:text-slate-50 hover:bg-[#ffffff4d] hover:rounded-3xl px-3 py-1'>
                  Library
                  <ChevronDown />
                </button>
              </li>
              <li className='mx-2'>
                <button className='transition-all text-sm md:text-lg flex flex-row items-center gap-1 text-slate-100 font-semibold hover:text-slate-50 hover:bg-[#ffffff4d] hover:rounded-3xl px-3 py-1'>
                  About
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex flex-row items-center'>
          <div className='block md:hidden'>
            <FaBars className='text-teal-400 w-5 h-5' />
          </div>
        </div>
      </div>
    </header>
  );
}

function ChevronDown() {
  return (
    <svg
      data-testid='geist-icon'
      fill='none'
      height='14'
      shapeRendering='geometricPrecision'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      width='24'
      aria-hidden='true'
      style={{
        color: 'currentcolor',
        width: '14px',
        height: '14px',
        transition: 'rotate .2s ease'
      }}>
      <path d='M6 9l6 6 6-6'></path>
    </svg>
  );
}

function Moon() {
  return (
    <svg viewBox='0 0 24 24' width='24' height='24' className='text-black'>
      <path
        fill='currentColor'
        d='M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z'></path>
    </svg>
  );
}

function Sun() {
  return (
    <svg viewBox='0 0 24 24' width='24' height='24' className='text-black'>
      <path
        fill='currentColor'
        d='M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z'></path>
    </svg>
  );
}
