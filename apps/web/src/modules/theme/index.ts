'use client';

// Theme Typings
import type { IThemeContext } from './types';

// React
import { createContext } from 'react';

/* Creating a context object with the type of IThemeContext. */
const ThemeContext = createContext<IThemeContext>({
  setColorScheme(colorScheme) {},
  setColorPreset(colorPreset) {},
  reset() {}
});

ThemeContext.displayName = 'Theme State Management';

export { ThemeContext };
