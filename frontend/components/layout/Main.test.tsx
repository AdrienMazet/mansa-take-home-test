import { render, screen } from '@testing-library/react';
import Main from './Main';

const myWebsiteContent = 'My website content';

describe('Main', () => {
  it('renders the main content', () => {
    render(
      <Main>
        <p>{myWebsiteContent}</p>
      </Main>,
    );
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveTextContent(myWebsiteContent);
  });
});
