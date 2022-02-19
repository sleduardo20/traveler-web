import { FaArrowLeft } from 'react-icons/fa';
import { render, screen } from 'utils/test-utils';
import Button from '.';

describe('<Button/>', () => {
  it('should be able render Button component with size small', () => {
    render(<Button title="button test" size="small" />);

    expect(screen.getByRole('button', { name: 'button test' })).toHaveStyle({
      height: '4rem',
      width: '4rem',
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

  it('should be able render Button component with size medium and color blue low', () => {
    render(<Button color="blueLow" title="button test" />);

    expect(screen.getByRole('button', { name: 'button test' })).toHaveStyle({
      background: '#DDE9F0',
      width: '22.5rem',
      height: '4.8rem',
    });
  });

  it('should be able render Button component with icon', () => {
    render(
      <Button
        color="blueLow"
        title="button test"
        size="medium"
        icon={<FaArrowLeft aria-label="icon button test" />}
      />,
    );

    expect(screen.getByLabelText(/icon button test/i)).toBeInTheDocument();
  });
});
