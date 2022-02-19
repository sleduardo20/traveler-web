import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../utils/test-utils';

import InputSearch from '.';

describe('<Input/>', () => {
  const props = {
    name: 'inputsearch',
    isFilled: false,
    handleClear: jest.fn(),
  };

  it('should be able render InputSearch component correctly', async () => {
    render(<InputSearch {...props} />);
    const input = screen.getByRole('textbox');

    expect(screen.getByLabelText(/icon-search/i)).toHaveStyle({
      color: '#DCE2E6',
    });

    userEvent.type(input, 'Text test');

    expect(screen.getByLabelText(/icon-search/i)).toHaveStyle({
      color: '#F25D27',
    });

    userEvent.clear(input);

    expect(screen.getByLabelText(/icon-search/i)).toHaveStyle({
      color: '#DCE2E6',
    });

    userEvent.type(input, 'Text test');

    const iconClose = screen.getByLabelText(/icon-close/i);

    await waitFor(() => {
      userEvent.click(iconClose);
    });

    expect(input).toHaveAttribute('value', '');
  });
});
