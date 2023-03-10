import '../src/app/globals.css';

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
  },
  options: {
    storySort: {
      order: ['About', '*']
    }
  }
};
