import { render, screen } from 'test-utils';
import Heading from './Heading';

const myHeading = 'Section heading';

describe('Heading', () => {
  it('renders a heading', () => {
    render(<Heading heading={myHeading} />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(myHeading);
  });
});
