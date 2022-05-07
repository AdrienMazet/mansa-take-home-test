import styled from 'styled-components';
import Heading from '../section/Heading';

type AccountsDetailsProps = {
  accounts: Account[];
};

const AccountsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  max-width: 900px;
`;

const AccountCard = styled.div`
  background-color: rgb(245, 243, 251);
  border: 1px solid #cfc7f0;
  border-radius: 5px;
`;

const AccountsDetails: React.FC<AccountsDetailsProps> = ({ accounts }) => (
  <section>
    <Heading heading="Accounts" />
    <AccountsGrid>
      {accounts.map((account) => (
        <AccountCard key={account.account_number}>
          {account.account_number}
        </AccountCard>
      ))}
    </AccountsGrid>
  </section>
);

export default AccountsDetails;
