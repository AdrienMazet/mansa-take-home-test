import { render, screen } from '../../test-utils';
import Layout from '.';

const myPageContent = 'My page content';

describe('Layout', () => {
  beforeEach(() =>
    render(
      <Layout>
        <p>{myPageContent}</p>
      </Layout>,
    ),
  );
  it('renders a header', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
  it('renders the main content', () => {
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveTextContent(myPageContent);
  });
});
