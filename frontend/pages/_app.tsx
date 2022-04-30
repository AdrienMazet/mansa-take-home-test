import { AppProps } from 'next/app';
import Head from 'next/head';
import MansaThemeProvider from '../styles';
import Layout from '../components/layout';

const Mansa = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Mansa</title>
      <meta name="description" content="Mansa frontend take home test" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MansaThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MansaThemeProvider>
  </>
);

export default Mansa;
