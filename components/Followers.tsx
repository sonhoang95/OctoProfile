import Image from 'next/image';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Followers = () => {
  const { followers } = useContext(AppContext);
  return (
    <section className="relative bg-gray-100 rounded-b rounded-r px-6 py-4 text-midnight  space-y-4 mt-8">
      <div className="absolute top-0 left-0 bg-gray-100 rounded-t transform -translate-y-full capitalize px-3 py-1 font-semibold tracking-wider text-lg text-accent">
        followers
      </div>
      <div className="overflow-y-scroll h-[260px]">
        {followers.map((follower, index) => {
          const { avatar_url, html_url, login } = follower;
          return (
            <article key={index} className="flex items-center gap-5">
              <Image
                src={avatar_url}
                alt={login}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold">{login}</h4>
                <a href={html_url} className="text-gray-500">
                  {html_url}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Followers;
