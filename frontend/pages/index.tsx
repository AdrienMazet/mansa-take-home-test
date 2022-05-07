import BusinessDetails from 'components/business-details';
import UserDetails from 'components/user-details';
import type { NextPage } from 'next';
import { getBusiness } from 'services/business';
import { getUser } from 'services/user';
import styled from 'styled-components';

// TODO
// Company details : teste2e
// Accounts : CSS table + API + Comp + + test + responsive + accessibility + perf + factorisé comp header
// Pour accounts : pagination pour custom hook ?
// check hook swr
// tester la page index.tsx et_app.tsx ? !
// faire des mocks server side avec cypress ?
// avant de livrer : readme, lint, test & deploy + check coverage
// extract main page container ?

type HomeProps = {
  user: User;
  business: Business;
};

export const getServerSideProps = async () => {
  const user = await getUser();
  const business = await getBusiness();
  return { props: { user, business } };
};

const Container = styled.div`
  > * {
    margin-top: 30px;
  }
`;

const Home: NextPage<HomeProps> = ({ user, business }) => (
  <Container>
    <UserDetails user={user} />
    <BusinessDetails business={business} />
  </Container>
);

export default Home;
