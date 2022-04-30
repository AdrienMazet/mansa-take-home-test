import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import Layout from '../components/layout';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}
#__next {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
`;

const Mansa = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Mansa</title>
      <meta name="description" content="Mansa frontend take home test" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
);

export default Mansa;
