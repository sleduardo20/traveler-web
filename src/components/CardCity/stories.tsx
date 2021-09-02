import { Story, Meta } from '@storybook/react/types-6-0';

import { CardCity, CardCityProps } from '.';

export default {
  title: 'components/Card',
  component: CardCity,
} as Meta;

export const Normal: Story<CardCityProps> = args => (
  <div style={{ padding: '16px' }}>
    <CardCity {...args} />
  </div>
);

Normal.args = {
  size: 'normal',
  city: 'Florianopolis',
  src: 'https://images.unsplash.com/photo-1545145879-71cf2f60c2a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
  places: 56,
};

export const Large: Story<CardCityProps> = args => (
  <div style={{ padding: '16px' }}>
    <CardCity {...args} />
  </div>
);

Large.args = {
  size: 'large',
  city: 'Florianopolis',
  src: 'https://images.unsplash.com/photo-1545145879-71cf2f60c2a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
  places: 56,
};
