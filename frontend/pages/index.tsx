import AccountsDetails from 'components/accounts-details';
import BusinessDetails from 'components/business-details';
import UserDetails from 'components/user-details';
import type { NextPage } from 'next';
import { getAccounts } from 'services/accounts';
import { getBusiness } from 'services/business';
import { getUser } from 'services/user';
import styled from 'styled-components';

// TODO
// Accounts : CSS table + Comp + + test + responsive + accessibility + perf
// Pour accounts : pagination pour custom hook ?
// check hook swr

// Use of cy.get('...') on data-cy attributes
// Normally I would have mocked the API call to retrieve user details
// And used cy.get('...') on the expected text content (initials, fullname)
// As the API call is done server side, I would have to mess a bit
// with the configuration to mock it
// Test assez léger avec Cypress car pas de mocks

// avant de livrer : readme, lint, test & deploy + check coverage
// extract main page container ?

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

const StyledContainer = styled.div`
  > * {
    margin-top: 30px;
  }
`;

const Home: NextPage<HomeProps> = ({ user, business, accounts }) => (
  <StyledContainer>
    <UserDetails user={user} />
    <BusinessDetails business={business} />
    <AccountsDetails accounts={accounts} />
  </StyledContainer>
);

export default Home;
