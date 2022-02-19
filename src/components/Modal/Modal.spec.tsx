import { render, screen } from '@testing-library/react';
import Modal from '.';

describe('<ApplicationModal/>', () => {
  const props = {
    open: false,
  };

  it('should be able render ApplicationModal component correctly', () => {
    render(<Modal {...props} />);
  });
});
