import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Main from './Main';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Mansa</title>
      <meta name="description" content="Mansa frontend take home test" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Main>{children}</Main>
  </>
);

export default Layout;
