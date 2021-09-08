import { render, screen } from '../../utils/test-utils';

import { CardPlace } from '.';
import { mockCardPlace } from './mock';

describe('<CardPlace/>', () => {
  it('should be able render CardPlace component', () => {
    render(<CardPlace {...mockCardPlace} />);

    expect(screen.getByText(/Doce & Companhia/i)).toBeTruthy();
  });
});
