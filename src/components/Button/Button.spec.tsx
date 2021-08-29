import { render, screen } from 'utils/test-utils';
import { Button } from '.';

describe('<Button/>', () => {
  it('should be able render Button component with size small and color blue low', () => {
    render(<Button color="blueLow" title="button test" size="small" />);

    expect(screen.getByRole('button', { name: 'button test' })).toHaveStyle({
      background: '#DDE9F0',
      height: '4.8rem',
      width: '17.4rem',
    });
  });

  it('should be able render Button component with size large and color orange', () => {
    render(<Button color="orange" title="button test" size="large" />);

    expect(screen.getByRole('button', { name: 'button test' })).toHaveStyle({
      background: '#F25D27',
      height: '7.2rem',
      width: '32.9rem',
    });
  });
});
