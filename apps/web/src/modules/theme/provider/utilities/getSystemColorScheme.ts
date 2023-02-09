// Color Scheme Typings
import { ColorScheme } from '../../types';

// Constants
import { MEDIA } from 'src/constants/client';
import { isServer } from 'src/constants/server';

/**
 * It returns the system color scheme, or `undefined` if the system color scheme is not available
 * @param {MediaQueryList | MediaQueryListEvent} [mediaQuery] - This is the media query that we'll use
 * to determine the system color scheme.
 * @returns A function that takes a mediaQuery as an argument.
 */
function getSystemColorScheme(
  mediaQuery?: MediaQueryList | MediaQueryListEvent
) {
  if (isServer) return undefined;
  if (!mediaQuery) mediaQuery = window.matchMedia(MEDIA);
  const isDark = mediaQuery.matches;
  const isSystem: ColorScheme = isDark ? 'dark' : 'light';
  return isSystem;
}

export { getSystemColorScheme };
