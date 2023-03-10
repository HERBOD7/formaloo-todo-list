import React from 'react';
import Categories from './components/Categories';

const Home = () => {
  return (
    <div className="py-8 px-5 w-5/6	lg:w-3/4">
      <header className="flex text-xl font-bold">My Tasks</header>
      <div className="my-5">
        <Categories />
      </div>
    </div>
  );
};

export default Home;
