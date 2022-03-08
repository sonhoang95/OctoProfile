import React from 'react';
import Card from './Card';
import Followers from './Followers';

const User = () => {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 grid lg:grid-cols-2 gap-6">
        <Card />
        <Followers />
      </div>
    </section>
  );
};

export default User;
