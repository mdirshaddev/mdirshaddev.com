import type { Meta, StoryObj } from '@storybook/react';

import { CookieBanner } from '.';

const meta: Meta<typeof CookieBanner> = {
  title: 'shared/components/Cookie Banner',
  tags: ['autodocs'],
  component: CookieBanner
};

export default meta;

type Story = StoryObj<typeof CookieBanner>;

export const Default: Story = {
  render: () => <CookieBanner />
};
