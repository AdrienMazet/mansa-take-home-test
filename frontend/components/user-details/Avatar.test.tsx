import { render, screen } from '../../test-utils';
import Avatar from './Avatar';

const myInitials = 'MA';

describe('Avatar', () => {
  it('renders children within avatar', () => {
    render(<Avatar>{myInitials}</Avatar>);
    const avatar = screen.getByText(myInitials);
    expect(avatar).toBeInTheDocument();
  });
});
