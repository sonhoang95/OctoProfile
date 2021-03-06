/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const Card = () => {
  const { githubUser } = useContext(AppContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <section className="relative bg-gray-100 rounded-b rounded-r px-6 py-4 text-midnight  space-y-4 mt-8">
      <div className="absolute top-0 left-0 bg-gray-100 rounded-t transform -translate-y-full capitalize px-3 py-1 font-semibold tracking-wider text-lg text-accent">
        User
      </div>
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
        <div className="flex items-center gap-5">
          <div className="border-2 border-accent rounded-full flex items-center justify-center p-1">
            <Image
              src={avatar_url}
              alt={name}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold tracking-wide">{name}</h4>
            <p className="text-gray-500">@{twitter_username || 'John Doe'}</p>
          </div>
        </div>
        <a
          href={html_url}
          className="inline-block text-center lg:text-left px-6 py-1 rounded-full border border-accent hover:bg-accent hover:text-gray-100 transition-colors duration-300"
        >
          Follow
        </a>
      </header>
      <p className="my-4 hidden lg:block">"{bio}"</p>
      <div className="text-gray-700 space-y-1 mt-4 lg:mt-0">
        <p className="flex items-center gap-3">
          <MdBusiness className="text-xl" /> {company}
        </p>
        <p className="flex items-center gap-3">
          <MdLocationOn className="text-xl" /> {location || 'Earth'}
        </p>
        <a
          href={`https://${blog}`}
          className="flex items-center gap-3 text-teal-500 hover:underline"
        >
          <MdLink className="text-xl" /> {blog}
        </a>
      </div>
    </section>
  );
};

export default Card;
