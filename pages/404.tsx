import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center capitalize">
      <div className="w-96 transform h-96 bg-pink-400 rounded-full -rotate-6 -mt-48 mb-16">
        <Image
          src="/images/404-figure.png"
          alt="astronaut flying"
          width={320}
          height={420}
        />
      </div>
      <h3 className="text-3xl mb-8 tracking-wide font-bold text-gray-50">
        — Looks like this planet does not exist —
      </h3>
      <Link href="/">
        <a className="px-8 py-3 rounded bg-pink-400 text-gray-50 uppercase transform border border-transparent hover:bg-transparent hover:border-pink-400 transition-all duration-200">
          Back home
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
