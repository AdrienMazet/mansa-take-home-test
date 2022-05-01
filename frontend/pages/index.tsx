import UserDetails from '@/components/user-details';
import type { NextPage } from 'next';

// TODO
// User details : API + test + responsive + accessibility + perf + extract to function
// Company details : API Siren + Comp + + test + responsive + accessibility + perf
// Accounts : CSS table + API + Comp + + test + responsive + accessibility + perf
// utilisation du SSR au lieu du SSG car les données d'un dashboard changent souvent
// tester la page !
// avant de livrer : readme, lint, test & deploy

type HomeProps = {
  user: User;
};

export const getServerSideProps = async () => {
  const res = await fetch(`https://randomuser.me/api`);
  const data = await res.json();
  const { first, last } = data.results[0].name;
  return { props: { user: { firstName: first, lastName: last } } };
};

const Home: NextPage<HomeProps> = ({ user }) => (
  <div style={{ marginTop: '25px' }}>
    <UserDetails user={user} />
  </div>
);

export default Home;
