import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import { Repos, Search, User, UserInfo } from '../components';
import Loader from '../components/Loader';
import { AppContext } from '../context/AppContext';
import Layout from '../layout/Layout';

const Home: NextPage = () => {
  const { isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <Layout isHome={true}>
        <Search />
        <Loader />
      </Layout>
    );
  }
  return (
    <div>
      <Head>
        <title>OctoProfile | Dashboard</title>
        <meta
          name="description"
          content="An alternative Github user dashboard"
        />
        <meta property="og:title" content="OctoProfile | Dashboard" />
        <meta
          property="og:description"
          content="An alternative Github user dashboard"
        />
        <meta
          property="og:image"
          content="https://octo-profile-mocha.vercel.app/ogImage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout isHome={true}>
        <Search />
        <UserInfo />
        <User />
        <Repos />
      </Layout>
    </div>
  );
};

export default Home;
