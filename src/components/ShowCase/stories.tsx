import { Story, Meta } from '@storybook/react/types-6-0';

import { ShowCase, ShowCaseProps } from '.';

import { mockShowCase } from './mockShowCase';

export default {
  title: 'components/ShowCase',
  component: ShowCase,
} as Meta;

export const Default: Story<ShowCaseProps> = args => (
  <div style={{ padding: '16px' }}>
    <ShowCase {...args} />
  </div>
);

Default.args = {
  ...mockShowCase,
};
