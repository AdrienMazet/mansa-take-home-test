import AccountsDetails from 'components/accounts-details';
import BusinessDetails from 'components/business-details';
import UserDetails from 'components/user-details';
import type { NextPage } from 'next';
import { getAccounts } from 'services/accounts';
import { getBusiness } from 'services/business';
import { getUser } from 'services/user';
import styled from 'styled-components';

type HomeProps = {
  user: User;
  business: Business;
  accounts: Account[];
};

export const getServerSideProps = async () => {
  const user = await getUser();
  const business = await getBusiness();
  const accounts = await getAccounts();
  return { props: { user, business, accounts } };
};

const Container = styled.div`
  > * {
    margin-top: 30px;
  }
`;

const Home: NextPage<HomeProps> = ({ user, business, accounts }) => (
  <Container>
    <UserDetails user={user} />
    <BusinessDetails business={business} />
    <AccountsDetails accounts={accounts} />
  </Container>
);

export default Home;
