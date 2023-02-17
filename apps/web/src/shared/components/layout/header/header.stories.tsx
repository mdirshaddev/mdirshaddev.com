import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { Header } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
  title: 'Shared/Layout/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { sort: 'requiredFirst' }
  }
};

type Story = StoryObj<typeof Header>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  decorators: [
    Story => {
      useEffect(() => {
        document.documentElement.style.setProperty(
          '--color-primary',
          '0 171 85'
        );
      }, []);
      return <Story />;
    }
  ]
};

export const Secondary: Story = {
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [
    Story => {
      useEffect(() => {
        document.documentElement.style.setProperty(
          '--color-primary',
          '214 64 69'
        );
      }, []);
      return <Story />;
    }
  ]
};

export const Success: Story = {};
export const Info: Story = {};
export const Warning: Story = {};
export const Error: Story = {};

export default meta;
