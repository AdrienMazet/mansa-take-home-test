import { render, screen } from '../../test-utils';
import Username from './Username';

const myUsername = 'John John Florence';

describe('Username', () => {
  it('renders username in a heading', () => {
    render(<Username username={myUsername} />);
    const username = screen.getByRole('heading');
    expect(username).toBeInTheDocument();
    expect(username).toHaveTextContent(myUsername);
  });
});
