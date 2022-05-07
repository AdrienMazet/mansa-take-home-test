import { render, screen } from 'test-utils';
import AccountCard from './AccountCard';

const myAccount: Account = {
  account_number: '1234',
  available: 1500,
  currency: 'USD',
};

describe('AccountCard', () => {
  it('renders account details', () => {
    render(<AccountCard account={myAccount} />);
    const accountNumber = screen.getByText(myAccount.account_number);
    expect(accountNumber).toBeInTheDocument();
    const balance = screen.getByText(
      `${myAccount.available} ${myAccount.currency}`,
    );
    expect(balance).toBeInTheDocument();
  });
});
