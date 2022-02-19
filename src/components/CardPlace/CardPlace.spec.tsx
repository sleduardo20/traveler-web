import { mockCardPlace } from 'mocks/CardPlace';
import { render, screen } from '../../utils/test-utils';

import CardPlace from '.';

describe('<CardPlace/>', () => {
  it('should be able render CardPlace component', () => {
    render(<CardPlace {...mockCardPlace} />);

    expect(screen.getByText(/Doce & Companhia/i)).toBeTruthy();
  });
});
