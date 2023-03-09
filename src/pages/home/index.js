import React from 'react';
import Categories from './components/Categories';

const Home = () => {
  // static categories
  const categories = [
    {
      title: 'Housework',
      id: 1,
    },
    {
      title: 'Shopping',
      id: 2,
    },
    {
      title: 'Personal',
      id: 3,
    },
    {
      title: 'Work',
      id: 4,
    },
  ];
  return (
    <div className="py-8 px-5 w-5/6	lg:w-3/4">
      <header className="flex text-xl font-bold">My Tasks</header>
      <div className="my-5">
        <Categories items={categories} />
      </div>
    </div>
  );
};

export default Home;
