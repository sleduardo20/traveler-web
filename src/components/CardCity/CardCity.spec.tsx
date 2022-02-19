import { mockCardCity } from 'mocks/CardCity';
import { render, screen } from 'utils/test-utils';

import CardCity from '.';

describe('<Card />', () => {
  it('should be able render Card component', () => {
    render(<CardCity {...mockCardCity} />);

    expect(screen.getByText('Florianopolis')).toBeTruthy;
    expect(screen.getByText(/locais/i)).toBeTruthy;
  });
  it('should be able render quantity places', () => {
    const newProps = {
      ...mockCardCity,
      places: 1,
    };
    render(<CardCity {...newProps} />);

    expect(screen.getByText('Florianopolis')).toBeTruthy;
    expect(screen.getByText(/local/i)).toBeTruthy;
  });
});
