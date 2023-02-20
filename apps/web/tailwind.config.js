/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{tsx,ts,jsx,js}', './src/**/*.{tsx,ts,jsx,js}'],
  darkMode: ['class', '[data-mode=dark]'],
  theme: {
    extend: {
      colors: {
        palette: {
          primary: {
            main: 'rgb(var(--color-primary) / <alpha-value>)'
          },
          secondary: {
            main: 'rgb(var(--color-secondary) / <alpha-value>)'
          },
          success: {
            main: 'rgb(var(--color-success) / <alpha-value>)'
          },
          info: {
            main: 'rgb(var(--color-info) / <alpha-value>)'
          },
          warning: {
            main: 'rgb(var(--color-warning) / <alpha-value>)'
          },
          error: {
            main: 'rgb(var(--color-error) / <alpha-value>)'
          },
          disabled: {
            main: 'var(--color-disabled)'
          }
        },
        primary: {
          // Customize it on globals.css :root
          200: 'rgb(var(--tw-clr-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-clr-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-clr-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-clr-primary-500) / <alpha-value>)'
        },
        dark: '#222222'
      },
      boxShadow: {
        'prompt-light':
          '0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%)',
        'prompt-dark': 'inset 0 1px 0 0 hsl(0deg 0% 100% / 5%)'
      },
      zIndex: {
        prompt: '60'
      }
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')]
};
