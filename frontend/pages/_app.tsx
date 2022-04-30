import { AppProps } from 'next/app';
import Layout from '../components/layout';
import '../styles/globals.css';

const Mansa = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default Mansa;
