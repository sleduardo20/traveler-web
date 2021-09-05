import { render, screen } from '../../utils/test-utils';

import { ShowCase } from '.';

import { mockShowCase } from './mockShowCase';

describe('<ShowCase/>', () => {
  it('should be able render ShowCase component correctly', () => {
    render(<ShowCase {...mockShowCase} />);

    expect(screen.getByText(/praia dos ingleses/i)).toBeTruthy();
  });
});
