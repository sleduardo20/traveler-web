import { Story, Meta } from '@storybook/react/types-6-0';

import { CardPlace, CardPlaceProps } from '.';
import { mockCardPlace } from './mock';

export default {
  title: 'components/CardPlace',
  component: CardPlace,
} as Meta;

export const Default: Story<CardPlaceProps> = args => (
  <div style={{ padding: '56px' }}>
    <CardPlace {...mockCardPlace} />
  </div>
);
