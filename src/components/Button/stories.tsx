import { Story, Meta } from '@storybook/react/types-6-0';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

import { Button, ButtonProps } from '.';

export default {
  title: 'components/Buttons',
  component: Button,
} as Meta;

export const Primary: Story<ButtonProps> = args => <Button {...args} />;

Primary.args = {
  color: 'blueLow',
  title: 'Acesso Restrito',
  size: 'medium',
};

export const Secondary: Story<ButtonProps> = args => <Button {...args} />;

Secondary.args = {
  color: 'orange',
  title: 'Descobrir todos os lugares',
  size: 'large',
};

export const Small: Story<ButtonProps> = args => <Button {...args} />;

Small.args = {
  size: 'small',
  icon: <FaArrowLeft />,
};

export const WithIcon: Story<ButtonProps> = args => <Button {...args} />;

WithIcon.args = {
  color: 'green',
  icon: <FaWhatsapp />,
  title: 'Entrar em Contato',
  size: 'medium',
};
