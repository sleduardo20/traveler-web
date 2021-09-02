import { render, screen } from 'utils/test-utils';

import { CardCity } from '.';

import { mockCardCity } from './mock';

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