import { Story, Meta } from '@storybook/react/types-6-0';
import { useModal } from '../../hooks/useModal';

import { Modal, ModalProps } from '.';

export default {
  title: 'components/Modal',
  component: Modal,
} as Meta;

export const Default: Story<ModalProps> = args => {
  const { openModal } = useModal();
  const test = () => console.log('tddfest');
  return (
    <>
      <button type="button" onClick={test}>
        Open Modal
      </button>
      <Modal {...args}>
        <h1>Content</h1>
      </Modal>
    </>
  );
};
