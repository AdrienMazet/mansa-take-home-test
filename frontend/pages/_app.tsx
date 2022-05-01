import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout';
import MansaThemeProvider from '../styles';

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
