import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layout/Layout';
import { AppProvider } from '../context/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
