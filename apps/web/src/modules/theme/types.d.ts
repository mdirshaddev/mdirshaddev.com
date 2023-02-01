/**
 * Multiple ColorPreset colors as type
 */
export type ColorPreset =
  | '#00AB55'
  | '#3366FF'
  | '#00B8D9'
  | '#36B37E'
  | '#FFAB00'
  | '#FF5630';

/**
 * Color Scheme
 */
export type ColorScheme = 'dark' | 'light' | 'system';

/* Defining the type of the variable. */
export interface IThemeContext {
  /**
   * Defining the type of the variable.
   */
  colorScheme?: ColorScheme;
  /**
   * A variable that is used to store the value of the color scheme.
   */
  resolvedColorScheme?: ColorScheme;
  /**
   * A variable that is used to store the value of the color scheme.
   */
  systemColorScheme?: ColorScheme;
  /**
   * A function that takes a parameter of type ColorScheme and returns void.
   * @param colorScheme
   * @returns void
   */
  setColorScheme: (colorScheme: ColorScheme) => void;
  /**
   * Defining the type of the variable.
   */
  colorPreset?: ColorPreset;
  /**
   * A variable that is used to store the value of the color scheme.
   */
  systemColorPreset?: ColorPreset;
  /**
   * A function that takes a parameter of type ColorPreset and returns void.
   *
   * @param colorPreset
   * @returns void
   */
  setColorPreset: (colorPreset: ColorPreset) => void;
  /**
   * A function that returns void.
   * @returns void
   */
  reset: () => void;
}

/* Defining the type of the variable. */
export interface IThemeProvider extends React.PropsWithChildren {
  /**
   * A boolean that is used to enable the system.
   */
  enableSystem?: boolean;
  /**
   * A variable that is used to store the value of the color scheme.
   */
  colorSchemeStorageKey?: string;
  /**
   * A variable that is used to store the value of the color scheme.
   */
  colorPresetStorageKey?: string;
  /**
   *
   */
  nonce?: string;
}

/* Extending the IThemeProvider interface with a new property. */
export interface IColorSchemeScript extends IThemeProvider {}

/* Extending the IThemeProvider interface with a new property. */
export interface IColorPresetScript extends IThemeProvider {
  /* Defining the type of the variable. */
  defaultColorPreset: ColorPreset;
}
