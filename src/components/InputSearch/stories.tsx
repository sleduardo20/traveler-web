import { Story, Meta } from '@storybook/react/types-6-0';

import { InputSearch, InputSearchProps } from '.';

export default {
  title: 'components/InputSearch',
  component: InputSearch,
} as Meta;

export const Default: Story<InputSearchProps> = args => (
  <InputSearch {...args} placeholder="Qual cidade você procura ?" />
);
