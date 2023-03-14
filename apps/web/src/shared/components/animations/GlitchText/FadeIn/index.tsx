'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface IFadeIn extends React.PropsWithChildren {
  onlyOnce: boolean;
}

export function FadeIn(props: IFadeIn) {
  const { children, onlyOnce } = props;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: onlyOnce });

  return (
    <motion.div ref={ref}>
      <div
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>
        {children}
      </div>
    </motion.div>
  );
}
