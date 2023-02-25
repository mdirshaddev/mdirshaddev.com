export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#0f172a'
      },
      {
        name: 'light',
        value: '#fff'
      }
    ]
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
