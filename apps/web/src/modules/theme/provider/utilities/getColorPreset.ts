// Color Preset Typings
import type { ColorPreset } from '../../types';

// Constants
import { isServer } from 'src/constants/server';

/**
 * If the key exists in localStorage, return the value, otherwise return the fallback
 * @param {ColorPreset} key - The key to store the color preset under.
 * @param {ColorPreset} [fallback] - The default color preset to use if the user has not set one.
 * @returns A function that takes in a key and fallback and returns a color preset.
 */
function getColorPreset(key: string, fallback?: ColorPreset) {
  if (isServer) return undefined;
  try {
    const colorPreset = localStorage.getItem(key) as ColorPreset;
    if (!colorPreset) {
      return fallback;
    } else {
      return colorPreset;
    }
  } catch (e) {
    // Unsupported
    console.log(e);
    // TODO: Add Logger
  }
}

export { getColorPreset };
