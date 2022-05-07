import { render, screen } from 'test-utils';
import AccountsDetails from '.';

const myAccounts: Account[] = [
  {
    account_number: '1234',
    available: 1500,
    currency: 'USD',
  },
  {
    account_number: '4321',
    available: 50000,
    currency: 'CRC',
  },
  {
    account_number: '1432',
    available: 0,
    currency: 'EUR',
  },
];

describe('AccountsDetails', () => {
  it('renders accounts details', () => {
    render(<AccountsDetails accounts={myAccounts} />);
    myAccounts.map((account) => {
      const accountNumber = screen.getByText(account.account_number);
      expect(accountNumber).toBeInTheDocument();
      const balance = screen.getByText(
        `${account.available} ${account.currency}`,
      );
      expect(balance).toBeInTheDocument();
    });
  });
});
