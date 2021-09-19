import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal, ModalProps } from '.';

export default {
  title: 'components/Modal',
  component: Modal,
} as Meta;

export const Default: Story<ModalProps> = args => (
  <Modal {...args}>
    <h1>Content</h1>
  </Modal>
);
