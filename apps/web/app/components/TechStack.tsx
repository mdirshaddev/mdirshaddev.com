'use client';

import NextLink, { LinkProps } from 'next/link';

import clsx from 'clsx';
import {
  SiTypescript,
  SiTerraform,
  SiMaterialui,
  SiVercel,
  SiCypress,
  SiStorybook,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiAmazonaws,
  SiTailwindcss,
  SiGithubactions,
  SiDocker
} from 'react-icons/si';

import { Tooltip } from 'src/shared/utilities/Tooltip';

export function TechStack() {
  const stacks = [
    {
      id: 'nextjs',
      icon: (
        <SiNextdotjs
          className={clsx(
            'cursor-pointer h-8 w-8 md:h-10 md:w-10',
            // 'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
            'transition-colors',
            'text-black dark:text-white'
          )}
        />
      ),
      tooltip: (
        <>
          <CustomLink href='https://nextjs.org'>Next.js</CustomLink>, currently
          my go-to framework because of the static generation, dynamic paths,
          and built-in api.
        </>
      )
    },
    {
      id: 'react',
      icon: (
        <SiReact
          className={clsx(
            'cursor-pointer h-8 w-8 md:h-10 md:w-10',
            // 'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
            'transition-colors',
            'text-[#61dafb]'
          )}
        />
      ),
      tooltip: (
        <>
          <CustomLink href='https://reactjs.org/'>Create React App</CustomLink>,
          first frontend framework that I learned, great if you are making an
          authenticated website.
        </>
      )
    },
    {
      id: 'typescript',
      icon: (
        <SiTypescript
          className={clsx(
            'cursor-pointer h-8 w-8 md:h-10 md:w-10',
            // 'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
            'transition-colors',
            'text-[#3178c6]'
          )}
        />
      ),
      tooltip: (
        <>
          <CustomLink href='https://www.typescriptlang.org/'>
            TypeScript
          </CustomLink>
          , finally jumping on this one, I love the experience! Check out my{' '}
          <CustomLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
            starter template
          </CustomLink>{' '}
          using Next.js, Tailwind CSS, and TypeScript
        </>
      )
    },
    {
      id: 'tailwind',
      icon: (
        <SiTailwindcss
          className={clsx(
            'cursor-pointer h-8 w-8 md:h-10 md:w-10',
            // 'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
            'transition-colors',
            'text-[#38bdf8]'
          )}
        />
      ),
      tooltip: (
        <>
          <CustomLink href='https://tailwindcss.com/'>Tailwind CSS</CustomLink>{' '}
          is awesome, I have never achieved this much reusability. Make sure you
          get the{' '}
          <CustomLink href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'>
            extension
          </CustomLink>
          .
        </>
      )
    },
    {
      id: 'vercel',
      icon: (
        <SiVercel
          className={clsx(
            'cursor-pointer h-8 w-8 md:h-10 md:w-10',
            // 'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
            'transition-colors',
            'text-black dark:text-white'
          )}
        />
      ),
      tooltip: (
        <>
          <CustomLink href='https://swr.vercel.app/'>SWR by Vercel</CustomLink>,
          great react hooks for data fetching and caching, the{' '}
          <CustomLink href='https://swr.vercel.app/docs/revalidation#revalidate-on-focus'>
            revalidate on focus
          </CustomLink>{' '}
          is unreal. react-query is also a great alternative to this.
        </>
      )
    },
    {
      id: 'node',
      icon: (
        <SiNodedotjs
          className={clsx(
            'cursor-pointer h-8 w-8 md:h-10 md:w-10',
            // 'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
            'transition-colors',
            'text-[#43853d]'
          )}
        />
      ),
      tooltip: (
        <>
          <CustomLink href='https://nodejs.org/'>Node.js</CustomLink>, simple
          backend language so you don't need to learn another language. Not
          using this too often because Next.js already has a backend built-in.
        </>
      )
    },
    {
      id: 'storybook',
      icon: (
        <SiStorybook
          className={clsx(
            'cursor-pointer h-8 w-8 md:h-10 md:w-10',
            // 'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
            'transition-colors',
            'text-[#FF4785]'
          )}
        />
      ),
      tooltip: (
        <>
          <CustomLink href='https://storybookjs.org/'>Storybook</CustomLink>,
          Storybook is a development environment for UI components that enables
          you to create and showcase components in an environment outside your
          main application.
        </>
      )
    },
    {
      id: 'cypress',
      icon: (
        <SiCypress
          className={clsx(
            'cursor-pointer h-8 w-8 md:h-10 md:w-10',
            // 'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
            'transition-colors',
            'text-[#00595D]'
          )}
        />
      ),
      tooltip: (
        <>
          <CustomLink href='https://cypress.org/'>Cypress</CustomLink>,
          Storybook is a development environment for UI components that enables
          you to create and showcase components in an environment outside your
          main application.
        </>
      )
    },
    {
      id: 'terraform',
      icon: (
        <SiTerraform
          className={clsx(
            'cursor-pointer h-8 w-8 md:h-10 md:w-10',
            // 'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
            'transition-colors',
            'text-[#844FBA]'
          )}
        />
      ),
      tooltip: (
        <>
          <CustomLink href='https://terraform.org/'>Terraform</CustomLink>,
          Storybook is a development environment for UI components that enables
          you to create and showcase components in an environment outside your
          main application.
        </>
      )
    },
    {
      id: 'aws',
      icon: (
        <SiAmazonaws
          className={clsx(
            'cursor-pointer h-8 w-8 md:h-10 md:w-10',
            // 'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
            'transition-colors',
            'text-[#ec7211]'
          )}
        />
      ),
      tooltip: (
        <>
          <CustomLink href='https://aws.org/'>AWS</CustomLink>, Storybook is a
          development environment for UI components that enables you to create
          and showcase components in an environment outside your main
          application.
        </>
      )
    },
    {
      id: 'docker',
      icon: (
        <SiDocker
          className={clsx(
            'cursor-pointer h-8 w-8 md:h-10 md:w-10',
            // 'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
            'transition-colors',
            'text-[#0072e5]'
          )}
        />
      ),
      tooltip: (
        <>
          <CustomLink href='https://aws.org/'>Docker</CustomLink>, Docker is an
          open platform for developing, shipping, and running applications.
        </>
      )
    },
    {
      id: 'github-actions',
      icon: (
        <SiGithubactions
          className={clsx(
            'cursor-pointer h-8 w-8 md:h-10 md:w-10',
            // 'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
            'transition-colors',
            'text-[#0969da]'
          )}
        />
      ),
      tooltip: (
        <>
          <CustomLink href='https://aws.org/'>Github Actions</CustomLink>,
          Storybook is a development environment for UI components that enables
          you to create and showcase components in an environment outside your
          main application.
        </>
      )
    }
  ];
  return (
    <div
      className={clsx(
        'max-w-[280px] md:w-96',
        'mx-auto lg:mx-0',
        'grid grid-cols-6 md:grid-cols-6 items-center place-items-center lg:place-items-start',
        'gap-4'
      )}>
      {stacks.map(tech => (
        <Tooltip key={tech.id} content={<p>{tech.tooltip}</p>}>
          {/* <tech.icon key={tech.id} className={} /> */}
          {tech.icon}
        </Tooltip>
      ))}
    </div>
  );
}

interface NextLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

function CustomLink({ children, className = '', ...rest }: NextLinkProps) {
  return (
    <NextLink
      {...rest}
      className={clsx(
        'animated-underline custom-link inline-flex items-center font-medium',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
        'border-b border-dotted border-dark hover:border-black/0',
        className
      )}>
      <span className='dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent'>
        {children}
      </span>
    </NextLink>
  );
}
