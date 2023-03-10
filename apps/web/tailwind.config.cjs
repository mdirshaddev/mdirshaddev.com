const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{tsx,ts}', './src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        lg: '900px',
        ...defaultTheme.screens
      },
      zIndex: {
        globalHeader: 100
      },
      backgroundImage: {
        dark: 'url(/bg-main-dark.jpg)',
        'pixel-grid': 'url(/dark-pixel-grid.svg)',
        grid: 'linear-gradient(to right, #818a9f26 1px, transparent 1px),linear-gradient(to bottom, #41454c57 1px, transparent 1px)',
        'shade-dark': 'linear-gradient(to right, #0A1929, rgba(10, 25, 41, 0))'
      },
      animation: {
        wobblyPurple: 'wooblyPurple 11s infinite',
        wooblyPink: 'wooblyPink 11s infinite reverse',
        wooblyBlue: 'wooblyBlue 11s infinite reverse'
      },
      keyframes: {
        wooblyPurple: {
          '0%': {
            transform:
              'translateY(-50%) translateX(-50%) rotate(-20deg) translateX(20%)'
          },
          '25%': {
            transform:
              'translateY(-50%) translateX(-50%) skew(-15deg,-15deg) rotate(80deg) translateX(30%)'
          },
          '50%': {
            transform:
              'translateY(-50%) translateX(-50%) rotate(180deg) translateX(25%)'
          },
          '75%': {
            transform:
              'translateY(-50%) translateX(-50%) skew(15deg,15deg) rotate(240deg) translateX(15%)'
          },
          '100%': {
            transform:
              'translateY(-50%) translateX(-50%) rotate(340deg) translateX(20%)'
          }
        },
        wooblyPink: {
          '0%': {
            transform:
              'translateY(-50%) translateX(-50%) rotate(40deg) translateX(-20%)'
          },
          '25%': {
            transform:
              'translateY(-50%) translateX(-50%) skew(15deg,15deg) rotate(110deg) translateX(-5%)'
          },
          '50%': {
            transform:
              'translateY(-50%) translateX(-50%) rotate(210deg) translateX(-35%)'
          },
          '75%': {
            transform:
              'translateY(-50%) translateX(-50%) skew(-15deg,-15deg) rotate(300deg) translateX(-10%)'
          },
          '100%': {
            transform:
              'translateY(-50%) translateX(-50%) rotate(400deg) translateX(-20%)'
          }
        },
        wooblyBlue: {
          '0%': {
            transform:
              'translateY(-50%) translateX(-50%) rotate(40deg) translateX(-20%)'
          },
          '25%': {
            transform:
              'translateY(-50%) translateX(-50%) skew(15deg,15deg) rotate(110deg) translateX(-5%)'
          },
          '50%': {
            transform:
              'translateY(-50%) translateX(-50%) rotate(210deg) translateX(-35%)'
          },
          '75%': {
            transform:
              'translateY(-50%) translateX(-50%) skew(-15deg,-15deg) rotate(300deg) translateX(-10%)'
          },
          '100%': {
            transform:
              'translateY(-50%) translateX(-50%) rotate(400deg) translateX(-20%)'
          }
        }
      }
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')]
};
