import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
const Search = () => {
  const [user, setUser] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      // more logic
      // optional
      setUser('');
    }
    console.log(user);
  };
  //get things from global context
  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 grid lg:grid-cols-[1fr_max-content] items-center mb-6 lg:mb-8 text-midnight gap-8">
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
            <button className="rounded bg-accent text-gray-100 px-3 py-1 capitalize hover:bg-green-700 hover:text-white transition-colors duration-300">
              search
            </button>
          </div>
        </form>
        <h3 className="text-gray-100 py-2 hidden lg:block">
          Requests: 60 / 60
        </h3>
      </div>
    </section>
  );
};

export default Search;
