import type { Decorator } from '@storybook/react';

import React, { useEffect } from 'react';

export const DEFAULT_COLOR_PRESET = '0 171 85';

export const withColorPreset: Decorator = (Story, StoryContext) => {
  const { colorPreset } = StoryContext.globals;

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-primary',
      colorPreset || DEFAULT_COLOR_PRESET
    );
  }, [colorPreset]);
  return <Story />;
};
