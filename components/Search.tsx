import React, { useContext, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { AppContext } from '../context/AppContext';
const Search = () => {
  const [user, setUser] = useState('');
  const { requests, error, searchGithubUser, isLoading } =
    useContext(AppContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      // more logic
      searchGithubUser(user);
      // optional
      setUser('');
    }
  };
  //get things from global context
  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-6 mt-8 lg:px-0 mb-6 lg:mb-8 text-midnight">
        {error.show && (
          <div className="text-red-500 text-lg font-semibold tracking-wide mb-4 capitalize text-center lg:text-left">
            <p>{error.msg}</p>
          </div>
        )}
        <div className="grid lg:grid-cols-[1fr_max-content] items-center gap-8">
          <form onSubmit={handleSubmit} className="bg-gray-100 rounded">
            <div className="grid grid-cols-[auto_1fr_auto] items-center rounded p-2">
              <MdSearch className="text-2xl text-accent" />
              <input
                type="text"
                placeholder="enter github user"
                className="bg-transparent px-2 py-1 outline-none"
                value={user}
                onChange={e => setUser(e.target.value)}
              />
              <button
                disabled={requests === 0 || isLoading}
                className="rounded bg-accent text-gray-100 px-3 py-1 capitalize hover:bg-green-700 hover:text-white transition-colors duration-300 disabled:opacity-50"
              >
                search
              </button>
            </div>
          </form>
          <h3 className="py-2 hidden lg:block text-2xl tracking-wide font-semibold text-gray-100">
            Requests: {requests} / 60
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Search;
