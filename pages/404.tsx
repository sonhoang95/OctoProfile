import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '../layout/Layout';

const NotFound: NextPage = () => {
  return (
    <Layout>
      <div className="flex items-center flex-col justify-center min-h-screen -mt-12">
        <div className="mb-8">
          <Image
            src="/images/login-figure.png"
            alt="flying person giving thumb ups"
            width={500}
            height={500}
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg lg:text-2xl font-semibold capitalize mb-4">
            Sorry, this page you tried does not exist
          </h3>
          <Link href="/">
            <a className="inline-block px-8 md:px-12 lg:px-16 text-sm lg:text-base py-2 md:py-3 lg:py-4 rounded bg-accent text-gray-50 uppercase transform border border-transparent hover:bg-transparent hover:border-accent transition-all duration-200">
              Back home
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
