import { render, screen } from '@testing-library/react';

import { Modal, ModalProps } from '.';

describe('<ApplicationModal/>', () => {
  it('should be able render ApplicationModal component correctly', () => {
    render(<Modal />);
  });
});
