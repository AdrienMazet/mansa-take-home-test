import { render, screen } from 'test-utils';
import SectionHeading from './SectionHeading';

const mySectionHeading = 'Section heading';

describe('SectionHeading', () => {
  it('renders a heading', () => {
    render(<SectionHeading heading={mySectionHeading} />);
    const sectionHeading = screen.getByRole('heading');
    expect(sectionHeading).toBeInTheDocument();
    expect(sectionHeading).toHaveTextContent(mySectionHeading);
  });
});
