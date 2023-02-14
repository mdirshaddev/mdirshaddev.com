import '../src/styles/global.css';
import { withColorPreset, withColorScheme } from './decorators';

export const parameters = {
  backgrounds: {
    default: 'dark'
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  nextjs: {
    appDirectory: true
  }
};

export const globalTypes = {
  colorScheme: {
    name: 'Color Scheme',
    // Text that will be shown on icon hover
    description: 'Color scheme allows you to have lgiht and dark scheme.',
    defaultValue: 'dark',
    toolbar: {
      /**
       * You can check all available icons by this link:
       * https://storybook.js.org/docs/riot/workflows/faq#what-icons-are-available-for-my-toolbar-or-my-addon
       */
      icon: 'lightning',
      items: [
        {
          left: '🌚',
          value: 'dark',
          title: 'Dark'
        },
        {
          left: '😎',
          value: 'light',
          title: 'Light'
        }
      ],
      // Should "Container size" be shown, or just the "circlehollow" icon
      showName: true
    }
  },
  colorPreset: {
    name: 'Color Preset',
    description: 'Color preset for 6 different color styles.',
    defaultValue: '0 171 85',
    toolbar: {
      icon: 'lightning',
      items: [
        {
          value: '0 171 85',
          title: 'Primary'
        },
        {
          value: '214 64 69',
          title: 'Secondary'
        },
        {
          value: '0 204 136',
          title: 'Success'
        },
        {
          value: '68 51 255',
          title: 'Info'
        },
        {
          value: '255 157 0',
          title: 'Warning'
        },
        {
          value: '249 6 87',
          title: 'Error'
        }
      ],
      showName: true
    }
  }
};

export const decorators = [withColorScheme, withColorPreset];
