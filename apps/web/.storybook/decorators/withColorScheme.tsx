import type { Decorator } from '@storybook/react';

import React from 'react';

export const DEFAULT_THEME = 'dark';

export const withColorScheme: Decorator = (Story, StoryContext) => {
  const { args, parameters } = StoryContext;

  if (parameters.modifyColorScheme) {
    Object.assign(args, parameters.modifyColorScheme(args));

    const htmlTag = document.documentElement;
    // Set the "data-mode" attribute on the iFrame html tag
    htmlTag.setAttribute('data-mode', args?.colorScheme as string);
  }

  return <Story {...args} />;
};
