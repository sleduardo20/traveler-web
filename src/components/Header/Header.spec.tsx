import { screen } from '@testing-library/react';
import { render } from 'utils/test-utils';

import { Header } from '.';

describe('<Header/>', () => {
  it('should be able render Header component correctly', () => {
    render(<Header />);
  });
});
