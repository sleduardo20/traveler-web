import { render, screen } from 'utils/test-utils';
import Logo from '.';

describe('<Logo />', () => {
  it('should render Logo', () => {
    render(<Logo />);

    expect(screen.getByLabelText('Logo Traveler')).toBeTruthy();
  });
});
