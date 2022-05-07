import { getFormattedFullName, getInitials } from 'utils/user';
import UserDetails from '.';
import { render, screen } from '../../test-utils';

const myUser: User = { firstName: 'Adrien', lastName: 'Mazet' };

describe('UserDetails', () => {
  beforeEach(() => render(<UserDetails user={myUser} />));
  it('renders user initials', () => {
    const initials = screen.getByText(
      getInitials(myUser.firstName, myUser.lastName),
    );
    expect(initials).toBeInTheDocument();
  });
  it('renders user fullname', () => {
    const fullname = screen.getByText(
      getFormattedFullName(myUser.firstName, myUser.lastName),
    );
    expect(fullname).toBeInTheDocument();
  });
});
