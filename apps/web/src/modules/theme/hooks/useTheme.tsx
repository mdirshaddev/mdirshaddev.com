import { useContext } from 'react';
import { ThemeContext } from '..';

/**
 * It returns the colorScheme, setColorScheme, colorPreset, and setColorPreset values from the
 * ThemeContext
 * @returns An object with the following properties:
 * colorScheme,
 * setColorScheme,
 * colorPreset,
 * setColorPreset
 */
const useTheme = () => {
  const { colorScheme, setColorScheme, colorPreset, setColorPreset } =
    useContext(ThemeContext);
  return {
    colorScheme,
    setColorScheme,
    colorPreset,
    setColorPreset
  };
};

export { useTheme };
