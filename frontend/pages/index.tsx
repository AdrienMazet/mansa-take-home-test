import UserDetails from '@/components/user-details';
import type { NextPage } from 'next';
import { getUser } from 'services/user';
import styled from 'styled-components';

// TODO
// User details : test
// Company details : API Siren + Comp + + test + responsive + accessibility + perf
// Accounts : CSS table + API + Comp + + test + responsive + accessibility + perf
// Pour accounts : clientSide fetching avec hook car les données changent souvent
// check hook swr
// tester la page index.tsx !
// avant de livrer : readme, lint, test & deploy

type HomeProps = {
  user: User;
};

export const getServerSideProps = async () => {
  const user = await getUser();
  return { props: { user } };
};

const Container = styled.div`
  margin-top: 25px;
`;

const Home: NextPage<HomeProps> = ({ user }) => (
  <Container>
    <UserDetails user={user} />
  </Container>
);

export default Home;
