import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '.';

export default {
  title: 'components/Button',
  component: Button,
} as Meta;

export const Default: Story<ButtonProps> = args => <Button {...args} />;

Default.args = {
  color: 'blueLow',
  title: 'Acesso Restrito',
};
