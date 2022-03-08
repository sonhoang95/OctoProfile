import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '../layout/Layout';

const Login = () => {
  return (
    <Layout>
      <div className="flex items-center flex-col justify-center min-h-screen -mt-20">
        <div className="mb-16">
          <Image
            src="/images/login-figure.png"
            alt="namaste pose"
            width={600}
            height={600}
          />
        </div>
        <div>
          <Link href="/">
            <a className="px-12 md:px-20 lg:px-24 text-base lg:text-lg py-3 md:py-5 lg:py-6 rounded bg-accent text-gray-50 uppercase transform border border-transparent hover:bg-transparent hover:border-accent transition-all duration-200">
              Login
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
