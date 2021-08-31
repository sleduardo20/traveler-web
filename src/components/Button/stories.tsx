import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '.';

export default {
  title: 'components/Button',
  component: Button,
} as Meta;

export const Primary: Story<ButtonProps> = args => <Button {...args} />;

Primary.args = {
  color: 'blueLow',
  title: 'Acesso Restrito',
  size: 'small',
};

export const Secondary: Story<ButtonProps> = args => <Button {...args} />;

Secondary.args = {
  color: 'orange',
  title: 'Acesso Restrito',
  size: 'large',
};
