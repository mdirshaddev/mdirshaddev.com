import { useContext } from 'react';
import { ThemeContext } from '..';

/**
 * It returns the colorScheme, setColorScheme, and resolvedColorScheme from the ThemeContext
 * @returns An object with three properties: colorScheme, setColorScheme, and resolvedColorScheme.
 */
const useTheme = () => {
  const {
    colorScheme,
    setColorScheme,
    resolvedColorScheme,
    colorPreset,
    setColorPreset
  } = useContext(ThemeContext);
  return {
    colorScheme,
    setColorScheme,
    resolvedColorScheme,
    colorPreset,
    setColorPreset
  };
};

export { useTheme };
