import { render, screen } from '../../test-utils';
import Main from './Main';

const myPageContent = 'My page content';

describe('Main', () => {
  it('renders the main content', () => {
    render(
      <Main>
        <p>{myPageContent}</p>
      </Main>,
    );
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveTextContent(myPageContent);
  });
});
