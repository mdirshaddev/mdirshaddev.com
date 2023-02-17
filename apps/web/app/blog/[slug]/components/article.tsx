'use client';

import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

export function Article(props: { code: string }) {
  const Component = useMemo(() => {
    return getMDXComponent(props.code);
  }, [props.code]);
  return (
    <div>
      <Component />
    </div>
  );
}
