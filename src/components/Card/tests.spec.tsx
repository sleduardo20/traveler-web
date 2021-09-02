import { render, screen } from 'utils/test-utils';

import { Card } from '.';

import { mockCard } from './mock';

describe('<Card />', () => {
  it('should be able render Card component', () => {
    render(<Card {...mockCard} />);

    expect(screen.getByText('Florianopolis')).toBeTruthy;
    expect(screen.getByText(/locais/i)).toBeTruthy;
  });
  it('should be able render quantity places', () => {
    const newProps = {
      ...mockCard,
      places: 1,
    };
    render(<Card {...newProps} />);

    expect(screen.getByText('Florianopolis')).toBeTruthy;
    expect(screen.getByText(/local/i)).toBeTruthy;
  });
});
