import { Story, Meta } from '@storybook/react/types-6-0';
import EmptyState from '.';

export default {
  title: 'components/EmptyState',
  component: EmptyState,
} as Meta;

export const Default: Story = args => <EmptyState {...args} />;
