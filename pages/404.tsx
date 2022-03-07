import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound: NextPage = () => {
  return (
    <div className="bg-black flex flex-col min-h-screen justify-center items-center capitalize">
      <div className="w-96 transform -rotate-6 -mt-20">
        <Image
          src="/images/astronaut.webp"
          alt="astronaut flying"
          width={384}
          height={480}
        />
      </div>
      <h3 className="text-3xl mb-5 -mt-20 tracking-wide font-bold text-white">
        — Looks like this planet does not exist —
      </h3>
      <Link href="/">
        <a className="px-8 py-3 mt-3 rounded bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 text-white uppercase transform hover:-translate-y-2 transition-all duration-200">
          Back home
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
