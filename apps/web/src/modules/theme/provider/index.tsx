'use client';

// Custom Typings for Color Scheme and Preset
import type {
  ColorPreset,
  ColorScheme,
  IThemeContext,
  IThemeProvider
} from '../types';

// React Typings
import type { FC } from 'react';

// React
import { useCallback, useEffect, useMemo, useState } from 'react';

// Theme Context
import { ThemeContext } from '..';

// Constants
import { MEDIA } from 'src/constants/client';

// Utilities
import {
  ColorPresetScript,
  ColorSchemeScript,
  getColorPreset,
  getColorScheme,
  getSystemColorScheme
} from './utilities';

/**
 * It's a React component that provides a context value to its children
 * @param {IThemeProvider} IThemeProvider - theme props containing storage key of color scheme and preset
 * @returns A ThemeProvider component that takes in a bunch of props and returns a
 * ThemeContext.Provider component that takes in a providerValue and returns a ColorSchemeScript and ColorPresetScript component
 * and the children of the ThemeProvider component.
 */
const ThemeProvider: FC<IThemeProvider> = ({
  colorPresetStorageKey = 'colorPreset',
  colorSchemeStorageKey = 'colorScheme',
  ...props
}: IThemeProvider) => {
  const defaultColorScheme: ColorScheme = 'dark';

  const defaultColorPreset: ColorPreset = '0 171 85';

  /**
   * It's a React hook that is used to
   * set the initial value of the colorScheme state variable.
   */
  const [colorScheme, setColorScheme] = useState(() =>
    getColorScheme(colorSchemeStorageKey, defaultColorScheme)
  );

  /**
   * It's a React hook that is used to
   * set the initial value of the colorPreset state variable.
   */
  const [colorPreset, setColorPreset] = useState(() =>
    getColorPreset(colorPresetStorageKey, defaultColorPreset)
  );

  /**
   * It's a function that is called when
   * the user wants to change the theme.
   */
  const setScheme = useCallback((scheme: ColorScheme) => {
    setColorScheme(scheme);

    // Save to local storage
    try {
      localStorage.setItem(colorSchemeStorageKey, scheme);
    } catch (e) {
      // TODO: Add a logger here
    }
  }, []);

  /**
   * It's a function that is called when
   * the user wants to change the theme.
   */
  const setPreset = useCallback((preset: ColorPreset) => {
    setColorPreset(preset);

    // Save to local storage
    try {
      localStorage.setItem(colorPresetStorageKey, preset);
    } catch (e) {
      // TODO: Add a logger here
    }
  }, []);

  /**
   * It's a function that is called when
   * the user wants to reset the theme to the default theme.
   */
  const resetAll = useCallback(() => {
    setScheme(defaultColorScheme);
    localStorage.removeItem(colorSchemeStorageKey);
    setPreset(defaultColorPreset);
    localStorage.removeItem(colorPresetStorageKey);
  }, []);

  /**
   * It's a function that is called when
   * the user wants to change the color scheme.
   */
  const applyColorScheme = useCallback((scheme: ColorScheme) => {
    const d = document.documentElement;
    if (scheme === 'dark') {
      d.setAttribute('data-mode', scheme);
    }
    if (scheme === 'light') {
      d.setAttribute('data-mode', '');
    }
    localStorage.setItem(colorSchemeStorageKey, scheme);
  }, []);

  /**
   * Whenever Color Scheme change is found
   * triggers the update
   */
  useEffect(() => {
    // Apply Color Scheme on change of colorScheme value
    applyColorScheme(colorScheme as ColorScheme);
  }, [colorScheme]);

  /**
   * It's a function that is called when
   * the user wants to change the color preset.
   */
  const applyColorPreset = useCallback((preset: ColorPreset) => {
    let resolved: unknown = preset;
    if (!resolved) return;

    const d = document.documentElement;
    if (resolved) {
      d.style.setProperty('--color-primary', resolved as string);
    }
  }, []);

  /**
   * Whenever Color Preset change is found
   * triggers the update
   */
  useEffect(() => {
    // Apply Color Preset on change of colorPreset value
    applyColorPreset(colorPreset as ColorPreset);
  }, [colorPreset]);

  /**
   * Helper function for setting color scheme
   * based on user system color scheme changes
   */
  const handleMediaQuery = useCallback(
    (e: MediaQueryList | MediaQueryListEvent) => {
      const resolved = getSystemColorScheme(e);
      setColorScheme(resolved);
    },
    [colorScheme]
  );

  /**
   * Listen to Syste, Preference when user
   * have selected color scheme
   */
  useEffect(() => {
    const media = window.matchMedia(MEDIA);

    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handleMediaQuery);
    handleMediaQuery(media);

    // clean up
    return () => media.removeListener(handleMediaQuery);
  }, [handleMediaQuery]);

  /**
   * It's listening to the localStorage event
   * and setting the color scheme to the new value.
   */
  useEffect(() => {
    const handleColorSchemeStorage = (e: StorageEvent) => {
      if (e.key !== colorSchemeStorageKey) {
        return;
      }

      setColorScheme((e.newValue as ColorScheme) || defaultColorScheme);
    };

    window.addEventListener('storage', handleColorSchemeStorage);

    // clean up
    return () =>
      window.removeEventListener('storage', handleColorSchemeStorage);
  }, [setColorScheme]);

  /**
   * It's a memoized value that is returned
   * by the ThemeContext.Provider component.
   */
  const providerValue: IThemeContext = useMemo(
    () => ({
      colorScheme: colorScheme,
      setColorScheme: setScheme,
      colorPreset: colorPreset,
      setColorPreset: setPreset,
      reset: resetAll
    }),
    [colorScheme, setScheme, colorPreset, setPreset, resetAll]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      <ColorSchemeScript
        colorSchemeStorageKey={colorSchemeStorageKey}
        defaultColorScheme={defaultColorScheme}
      />
      <ColorPresetScript
        colorPresetStorageKey={colorPresetStorageKey}
        defaultColorPreset={defaultColorPreset}
      />
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
