import { Story, Meta } from '@storybook/react/types-6-0';
import { mockShowCase } from 'mocks/ShowCase';
import ShowCase from '.';
import { ShowCaseProps } from './ShowCase';

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
