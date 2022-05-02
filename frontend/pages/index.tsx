import UserDetails from 'components/user-details';
import type { NextPage } from 'next';
import { getUser } from 'services/user';
import styled from 'styled-components';

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
