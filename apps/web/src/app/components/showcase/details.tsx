'use client';

import clsx from 'clsx';

import {
  AnimatePresence,
  clamp,
  motion,
  PanInfo,
  useDragControls,
  useMotionValue
} from 'framer-motion';
import { Fragment, useEffect, useRef, useState } from 'react';

const swipeListOptions = [
  {
    src: '/landing/dark/product-advanced-dark.svg',
    title: 'Projects',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '/',
    id: 'projects'
  },
  {
    src: '/landing/dark/product-core-dark.svg',
    title: 'Projects Statistics',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '/',
    id: 'projects-statistics'
  },
  {
    src: '/landing/dark/product-designkits-dark.svg',
    title: 'Blog',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '/',
    id: 'blog'
  },
  {
    src: '/landing/dark/product-templates-dark.svg',
    title: 'Demo Contents',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '/',
    id: 'demo-contents'
  }
];

export function Details() {
  return (
    <Fragment>
      <DesktopList />
      <MobileList />
    </Fragment>
  );
}

function DesktopList() {
  const [selected, setSelected] = useState(swipeListOptions[0].id);
  console.log(selected);
  return (
    <div className='hidden lg:grid grid-cols-2 grid-rows-2 gap-4 pr-0'>
      {swipeListOptions.map(({ id, title, src, href, content }) => {
        return (
          <motion.button
            key={id}
            title={title}
            type='button'
            aria-label={title}
            onClick={() => setSelected(id)}
            whileTap={{
              scale: 1.1
            }}
            className={clsx(
              'w-full h-44 shadow-lg rounded-sm backdrop-blur-md ring-1 ring-slate-700'
            )}></motion.button>
        );
      })}
    </div>
  );
}

function MobileList() {
  const constraintRef = useRef<HTMLDivElement>(null);
  return (
    <AnimatePresence>
      <div className='w-full lg:hidden h-44' ref={constraintRef}>
        <motion.div drag='x' draggable className='flex flex-row gap-4'>
          {swipeListOptions.map(({ id, title, src, href, content }) => {
            return (
              <motion.button
                key={id}
                title={title}
                type='button'
                aria-label={title}
                className={clsx(
                  'w-full md:max-w-md h-44 bg-slate-900 ring-1 ring-slate-700 flex-shrink-0 rounded-md overflow-auto'
                )}></motion.button>
            );
          })}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
