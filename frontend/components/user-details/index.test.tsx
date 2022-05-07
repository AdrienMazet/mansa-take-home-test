import { getFormattedFullName, getInitials } from 'utils/user';
import UserDetails from '.';
import { act, fireEvent, render, screen, waitFor } from '../../test-utils';

const myInitialUser: User = { firstName: 'John John', lastName: 'Florence' };
const myNewUser: User = { firstName: 'Nathan', lastName: 'Florence' };

jest.mock('../../services/user', () => ({
  getUser: jest.fn(() => Promise.resolve(myNewUser)),
}));

describe('UserDetails', () => {
  beforeEach(() => render(<UserDetails user={myInitialUser} />));
  it('renders user initials', () => {
    const initials = screen.getByText(
      getInitials(myInitialUser.firstName, myInitialUser.lastName),
    );
    expect(initials).toBeInTheDocument();
  });
  it('renders user fullname', () => {
    const fullname = screen.getByText(
      getFormattedFullName(myInitialUser.firstName, myInitialUser.lastName),
    );
    expect(fullname).toBeInTheDocument();
  });
  it('renders a refetch user button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Refetch user');
  });
  it('renders a button that update the user when clicked', () => {
    expect(
      screen.getByText(
        getInitials(myInitialUser.firstName, myInitialUser.lastName),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        getFormattedFullName(myInitialUser.firstName, myInitialUser.lastName),
      ),
    ).toBeInTheDocument();
    const button = screen.getByRole('button');
    act(() => {
      fireEvent.click(button);
    });
    waitFor(() => {
      expect(
        screen.getByText(getInitials(myNewUser.firstName, myNewUser.lastName)),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          getFormattedFullName(myNewUser.firstName, myNewUser.lastName),
        ),
      ).toBeInTheDocument();
    });
  });
});
