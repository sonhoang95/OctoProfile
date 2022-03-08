import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
const UserInfo = () => {
  const { githubUser } = useContext(AppContext);
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="text-2xl text-pink-800" />,
      label: 'repos',
      values: public_repos,
      color: 'bg-pink-300',
    },
    {
      id: 2,
      icon: <FiUsers className="text-2xl text-teal-800" />,
      label: 'followers',
      values: followers,
      color: 'bg-teal-300',
    },
    {
      id: 3,
      icon: <FiUserPlus className="text-2xl text-purple-800" />,
      label: 'following',
      values: following,
      color: 'bg-purple-300',
    },
    {
      id: 4,
      icon: <GoGist className="text-2xl text-yellow-800" />,
      label: 'gists',
      values: public_gists,
      color: 'bg-yellow-300',
    },
  ];

  return (
    <section className="mb-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
        <div className="grid lg:grid-cols-4 gap-6 text-midnight capitalize">
          {items.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export interface ItemProps {
  id: number;
  icon: JSX.Element;
  label: string;
  values: number;
  color: string;
}

const Item = ({ icon, label, values, color }: ItemProps) => {
  return (
    <article className="flex items-center bg-gray-100 rounded gap-8 px-8 py-5">
      <span
        className={` w-12 h-12 rounded-full flex items-center justify-center ${color}`}
      >
        {icon}
      </span>
      <div>
        <h3 className="text-xl font-bold">{values}</h3>
        <p className="text-gray-500">{label}</p>
      </div>
    </article>
  );
};

export default UserInfo;
