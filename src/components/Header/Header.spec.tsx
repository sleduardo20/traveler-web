import { render, screen } from '@testing-library/react';

import { Header } from '.';

describe('<Header/>', () => {
  it('should be able render Header component correctly', () => {
    render(<Header />);
  });
});
