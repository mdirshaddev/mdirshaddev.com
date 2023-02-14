import type { Decorator } from '@storybook/react';

import React, { useEffect } from 'react';

export const DEFAULT_THEME = 'dark';

export const withColorScheme: Decorator = (Story, StoryContext) => {
  const { colorScheme } = StoryContext.globals;
  useEffect(() => {
    const htmlTag = document.documentElement;
    // Set the "data-mode" attribute on the iFrame html tag
    htmlTag.setAttribute('data-mode', colorScheme || DEFAULT_THEME);

    const checkDoc = checkViewMode();
    checkDoc
      ? document
          .querySelector('.sb-show-main')
          ?.classList.add('story-container')
      : document
          .querySelector('.sb-show-main')
          ?.classList.remove('story-container');

    document.querySelector('.sb-show-main')?.classList.remove('sb-show-main');

    document.querySelectorAll('.docs-story').forEach(item => {
      item.classList.remove('docs-story');
      item.classList.add('storybook-app');
    });

    document
      .querySelector('.sb-main-fullscreen')
      ?.classList.add('storybook-app');
  }, [colorScheme]);
  return <Story />;
};

/**
 * If the URL contains the query parameter `viewMode=docs`, then return false, otherwise return true
 * @returns a boolean value.
 */
function checkViewMode() {
  const query = window.location.href.toString();
  const queryParams = query.split('?')[1];
  var singleQuery = queryParams.split('&')[1];
  var viewMode = singleQuery.split('=')[1];
  if (viewMode === 'docs') return false;
  return true;
}
