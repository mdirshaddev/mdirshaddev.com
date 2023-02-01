// Theme Typings
import type { ColorScheme } from '../../types';

// Constants
import { isServer } from 'src/constants/server';

/**
 * If the key exists in localStorage, return the value, otherwise return the fallback
 * @param {string} key - The key to store the color scheme in localStorage
 * @param {ColorScheme} [fallback] - The default color scheme to use if the user has not set one.
 * @returns A function that takes in a key and fallback and returns a color scheme.
 */
function getColorScheme(key: string, fallback?: ColorScheme) {
  if (isServer) return undefined;
  try {
    const colorScheme = localStorage.getItem(key) as ColorScheme;
    if (!colorScheme) {
      return fallback;
    } else {
      return colorScheme;
    }
  } catch (e) {
    // Unsupported
    console.log(e);
    // TODO: Add Logger
  }
}

export { getColorScheme };
