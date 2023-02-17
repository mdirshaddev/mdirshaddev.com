import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { SearchPrompt } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof SearchPrompt> = {
  title: 'Shared/Prompt/Search',
  component: SearchPrompt,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { sort: 'requiredFirst' }
  },
  decorators: [
    Story => (
      <div className='w-full max-w-xl mx-auto'>
        <div
          className={clsx(
            'ring-1 ring-palette-primary-main',
            'bg-white dark:bg-dark shadow-prompt-light dark:shadow-prompt-dark',
            'rounded-md'
          )}>
          <Story />
        </div>
      </div>
    )
  ]
};

type Story = StoryObj<typeof SearchPrompt>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {};
export const Secondary: Story = {};
export const Success: Story = {};
export const Info: Story = {};
export const Warning: Story = {};
export const Error: Story = {};

export default meta;
