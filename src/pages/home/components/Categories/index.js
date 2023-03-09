import React from 'react';
import Tasks from '../Tasks';
import './index.scss';

const Categories = (props) => {
  const { items } = props;
  const CategoriesList = () => {
    const taskCategories = items.map((category) => {
      return (
        <li className="mt-4" key={category.id}>
          <section>
            <header className="flex items-center text-sm font-bold py-1 border-b border-stone-300">
              <span
                className={`h-2 w-2 mr-1 rounded Categories__item--${category.title}`}
              ></span>
              {category.title}
            </header>
            <div>
              <Tasks category={category.title} />
            </div>
          </section>
        </li>
      );
    });
    return <>{taskCategories}</>;
  };

  return (
    <ul>
      <CategoriesList />
    </ul>
  );
};

export default Categories;
