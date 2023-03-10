import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import {
  SiLinkedin,
  SiLeetcode,
  SiHackerrank,
  SiTwitter,
  SiCodepen,
  SiGitlab,
  SiGithub
} from 'react-icons/si';

const imageListOptions = [
  {
    icon: <SiLinkedin className='text-white w-6 h-6 mx-2' />,
    alt: 'Projects',
    href: 'https://linkedin.com/in/mdirshaddev',
    id: 'linkedin'
  },
  {
    icon: <SiLeetcode className='text-white w-6 h-6 mx-2' />,
    alt: 'Projects',
    href: 'https://leetcode.com/mdirshaddev',
    id: 'leetcode'
  },
  {
    icon: <SiHackerrank className='text-white w-6 h-6 mx-2' />,
    alt: 'Projects',
    href: 'https://hackerrank.com/mdirshaddev',
    id: 'hackerrank'
  },
  {
    icon: <SiTwitter className='text-white w-6 h-6 mx-2' />,
    alt: 'Projects',
    href: 'https://twitter.com/mdirshaddev',
    id: 'twitter'
  },
  {
    icon: <SiCodepen className='text-white w-6 h-6 mx-2' />,
    alt: 'Projects',
    href: 'https://codepen.io/mdirshaddev',
    id: 'codepen'
  },
  {
    icon: <SiGitlab className='text-white w-6 h-6 mx-2' />,
    alt: 'Projects',
    href: 'https://gitlab.com/mdirshaddev',
    id: 'gitlab'
  },
  {
    icon: <SiGithub className='text-white w-6 h-6 mx-2' />,
    alt: 'Projects',
    href: 'https://github.com/mdirshaddev',
    id: 'github'
  }
];

export function GlobalFooter() {
  return (
    <footer className=''>
      <div className='border-t border-slate-700 border-dashed py-4'>
        <div className='w-full max-w-[1200px] mx-auto px-4 md:px-6 xl:px-0'>
          <Link className='font-semibold text-lg text-teal-400' href={'/'}>
            @mdirshaddev
          </Link>
          <span className='ml-2 bg-white py-[2px] px-2 font-semibold rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm'>
            v0.0.0
          </span>
        </div>
      </div>
      <div className='border-t-[0.25px] border-slate-700 bg-slate-900'>
        <div className='w-full max-w-[1200px] mx-auto px-4 md:px-6 xl:px-0 py-4'>
          <div className='flex flex-row flex-wrap-reverse items-center justify-between'>
            <div className='text-white font-bold stext-lg py-4'>
              MIT License &copy; {new Date().getUTCFullYear()}{' '}
              <span className='underline text-white'>Md Irshad</span>
            </div>
            <div className='flex flex-row flex-wrap items-center gap-2 py-4'>
              {imageListOptions.map(({ id, icon, href, alt }) => {
                return (
                  <Fragment key={id}>
                    <a
                      href={href}
                      target='_blank'
                      className='p-2  cursor-newtab bg-teal-400 rounded-md'>
                      {icon}
                    </a>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
