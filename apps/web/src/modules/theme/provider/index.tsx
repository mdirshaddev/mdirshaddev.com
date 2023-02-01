'use client';

// Theme Types
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
import { getSystemColorScheme } from './utilities/getSystemColorScheme';
import { ColorSchemeScript } from './utilities/ColorSchemeScript';
import { getColorScheme } from './utilities/getColorScheme';
import { ColorPresetScript } from './utilities/ColorPresetScript';
import { getColorPreset } from './utilities/getColorPreset';

/**
 * It's a React component that provides a context value to its children
 * @param {IThemeProvider}  - `enableSystem` - whether to enable the system theme
 * @returns A ThemeProvider component that takes in a bunch of props and returns a
 * ThemeContext.Provider component that takes in a providerValue and returns a ThemeScript component
 * and the children of the ThemeProvider component.
 */
const ThemeProvider: FC<IThemeProvider> = ({
  enableSystem = true,
  colorPresetStorageKey = 'colorPreset',
  colorSchemeStorageKey = 'colorScheme',
  ...props
}: IThemeProvider) => {
  const defaultColorScheme = enableSystem === true ? 'system' : 'dark';

  const defaultColorPreset: ColorPreset = '#00AB55';

  /**
   * It's a React hook that is used to
   * set the initial value of the colorScheme state variable.
   */
  const [colorScheme, setColorScheme] = useState(() =>
    getColorScheme(colorSchemeStorageKey, defaultColorScheme)
  );

  /**
   * It's a React hook that is used to
   * set the initial value of the resolvedColorScheme state variable.
   */
  const [resolvedColorScheme, setResolvedColorScheme] = useState(() =>
    getColorScheme(colorSchemeStorageKey)
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
   * Helper function for applyColorScheme
   */
  const applyColorScheme = useCallback((scheme: ColorScheme) => {
    let resolved: unknown = scheme;
    if (!resolved) return;

    if (scheme === 'system' && enableSystem) {
      resolved = getSystemColorScheme();
    }
    const d = document.documentElement;
    if (resolved === 'dark') {
      d.setAttribute('data-mode', resolved as string);
    }
    if (resolved === 'light') {
      d.removeAttribute('data-mode');
    }
  }, []);

  /**
   * Whenever Color Scheme has been applied
   */
  useEffect(() => {
    // Apply Color Scheme on change of colorScheme value
    applyColorScheme(colorScheme as ColorScheme);
  }, [colorScheme]);

  /**
   * Helper function for applyColorPreset
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
   * Whenever Color Preset has been applied
   */
  useEffect(() => {
    // Apply Color Preset on change of colorPreset value
    applyColorPreset(colorPreset as ColorPreset);
  }, [colorPreset]);

  /**
   * Helper function
   */
  const handleMediaQuery = useCallback(
    (e: MediaQueryList | MediaQueryListEvent) => {
      const resolved = getSystemColorScheme(e);
      setResolvedColorScheme(resolved);
      if (colorScheme === 'system' && enableSystem) {
        // Apply the color scheme
        applyColorScheme('system');
      }
    },
    [colorScheme]
  );

  /**
   * Listen to Syste, Preference when user
   * have selected theme to be system
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
   * and setting the colorScheme to the new value.
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
      resolvedColorScheme:
        colorScheme === 'system' ? resolvedColorScheme : colorScheme,
      setColorScheme: setScheme,
      colorPreset: colorPreset,
      setColorPreset: setPreset,
      reset: resetAll
    }),
    [
      colorScheme,
      resolvedColorScheme,
      setScheme,
      colorPreset,
      setPreset,
      resetAll
    ]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      <ColorSchemeScript
        enableSystem={enableSystem}
        colorSchemeStorageKey={colorSchemeStorageKey}
        {...props}
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
