import { render, screen } from '@testing-library/react';

import EmptyState from '.';

describe('<EmptyState/>', () => {
  it('should be able render EmptyState component correctly', () => {
    render(<EmptyState />);
  });
});
