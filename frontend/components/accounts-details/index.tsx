import styled from 'styled-components';
import SectionHeading from '../section/SectionHeading';
import AccountCard from './AccountCard';

type AccountsDetailsProps = {
  accounts: Account[];
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  max-width: 900px;
`;

const AccountsDetails: React.FC<AccountsDetailsProps> = ({ accounts }) => (
  <section>
    <SectionHeading heading="Accounts" />
    <Grid>
      {accounts.map((account) => (
        <AccountCard key={account.account_number} account={account} />
      ))}
    </Grid>
  </section>
);

export default AccountsDetails;
