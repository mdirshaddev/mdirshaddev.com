import clsx from 'clsx';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';

export function SocialLinks() {
  const socialLinks = [
    {
      id: 'resume',
      href: 'https://github.com/mdirshaddev/mdirshaddev/raw/main/Md%20Irshad%20(RESUME).pdf',
      title: 'Resume',
      icon: <IoNewspaperOutline className='shrink-0 w-6 h-6 text-white' />
    },
    {
      id: 'twitter',
      href: 'https://twitter.com/mdirshaddev',
      title: '@mdirshaddev',
      icon: (
        <FaTwitter className='shrink-0 w-6 h-6 transition-colors text-[#1da1f2]' />
      )
    },
    {
      id: 'github',
      href: 'https://github.com/mdirshaddev',
      title: '@mdirshaddev',
      icon: <FaGithub className='shrink-0 w-6 h-6 text-white' />
    }
  ];
  return (
    <div
      data-fade='6'
      className={clsx(
        'flex flex-wrap items-center justify-center gap-4 gap-y-2',
        'mt-4'
      )}>
      {socialLinks.map(({ id, title, href, icon }) => (
        <a
          key={id}
          target='_blank'
          rel='noopener noreferrer'
          href={href}
          className='inline-flex items-center gap-1 text-sm font-medium md:text-base text-white focus:outline-none focus-visible:ring focus-visible:ring-palette-primary transition-colors cursor-newtab'>
          {icon}
          <span className='text-lg md:text-2xl'>{title}</span>
        </a>
      ))}
    </div>
  );
}
