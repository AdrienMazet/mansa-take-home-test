import type { NextPage } from 'next';

// TODO
// User details : API + Comp + + test + responsive + accessibility + perf
// Company details : API Siren + Comp + + test + responsive + accessibility + perf
// Accounts : API + Comp + + test + responsive + accessibility + perf
// utilisation du SSR au lieu du SSG car les données d'un dashboard changent souvent
// avant de livrer : readme, lint, test & deploy

type HomeProps = {
  data: any;
};

export async function getServerSideProps() {
  const res = await fetch(`https://randomuser.me/api`);
  const data = await res.json();
  return { props: { data } };
}

const Home: NextPage<HomeProps> = ({ data }) => (
  <>
    <h1 style={{ margin: 0 }}>Welcome to Mansa&apos;s Kata test!</h1>
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
  </>
);

export default Home;
