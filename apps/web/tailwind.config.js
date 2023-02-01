/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{tsx,ts,jsx,js}', './src/**/*.{tsx,ts,jsx,js}'],
  darkMode: ['class', '[data-mode=dark]'],
  theme: {
    extend: {
      colors: {
        palette: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          success: 'var(--color-success)',
          info: 'var(--color-info)',
          warning: 'var(--color-warning)',
          error: 'var(--color-error)',
          disabled: 'var(--color-disabled)'
        }
      }
    }
  },
  plugins: []
};
