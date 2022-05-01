import { AppProps } from 'next/app';
import Head from 'next/head';
import MansaThemeProvider from '../styles';

const Mansa = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Mansa</title>
      <meta name="description" content="Mansa frontend take home test" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MansaThemeProvider>
      <Component {...pageProps} />
    </MansaThemeProvider>
  </>
);

export default Mansa;
