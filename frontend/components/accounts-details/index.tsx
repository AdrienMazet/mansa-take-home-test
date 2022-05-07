import styled from 'styled-components';
import Heading from '../section/Heading';
import AccountCard from './AccountCard';

type AccountsDetailsProps = {
  accounts: Account[];
};

const AccountsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  max-width: 900px;
`;

const AccountsDetails: React.FC<AccountsDetailsProps> = ({ accounts }) => (
  <section>
    <Heading heading="Accounts" />
    <AccountsGrid>
      {accounts.map((account) => (
        <AccountCard key={account.account_number} account={account} />
      ))}
    </AccountsGrid>
  </section>
);

export default AccountsDetails;
