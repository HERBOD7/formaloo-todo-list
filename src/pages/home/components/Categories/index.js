import React from 'react';
import Category from '../Category';
import { useTasks } from 'src/context/TaskProvider';
import './index.scss';

const Categories = (props) => {
  const { tasks } = useTasks();
  const categoriesItem = Object.keys(tasks);
  const CategoriesList = () => {
    const taskCategories = categoriesItem.map((category) => {
      return (
        <li className="mt-4" key={category}>
          <Category categoryName={category} />
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
