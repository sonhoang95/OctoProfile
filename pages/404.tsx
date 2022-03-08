import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '../layout/Layout';

const NotFound: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen justify-center items-center capitalize px-6 lg:px-0">
        <div className="w-72 h-72 lg:w-96 transform lg:h-96 flex items-center justify-center bg-pink-400 rounded-full -rotate-6 -mt-48 mb-16">
          <Image
            src="/images/404-figure.png"
            alt="astronaut flying"
            width={250}
            height={360}
          />
        </div>
        <h3 className="text-center lg:text-left text-lg lg:text-3xl mb-8 tracking-wide font-bold text-gray-50">
          Looks like this planet does not exist
        </h3>
        <Link href="/">
          <a className="px-5 lg:px-8 py-2 lg:py-3 text-sm lg:text-base rounded bg-pink-400 text-gray-50 uppercase transform border border-transparent hover:bg-transparent hover:border-pink-400 transition-all duration-200">
            Back home
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
