import { Story, Meta } from '@storybook/react/types-6-0';
import { mockCardPlace } from '../../mocks/CardPlace';

import CardPlace from '.';
import { CardPlaceProps } from './CardPlace';

export default {
  title: 'components/CardPlace',
  component: CardPlace,
} as Meta;

export const Default: Story<CardPlaceProps> = args => (
  <div style={{ padding: '56px' }}>
    <CardPlace {...mockCardPlace} />
  </div>
);
