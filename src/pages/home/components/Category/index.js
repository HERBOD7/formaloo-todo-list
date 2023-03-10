import React, { useState } from 'react';
import Tasks from '../Tasks';

const Category = (props) => {
  const { categoryName } = props;
  const [showCompletedTask, setShowCompletedTask] = useState(false);

  const changeShowingStatus = () => {
    setShowCompletedTask(!showCompletedTask);
  };

  return (
    <section>
      <header className="flex items-center justify-between py-1 border-b border-stone-300">
        <div className="flex items-center text-sm font-bold">
          <span
            className={`h-2 w-2 mr-1 rounded Categories__item--${categoryName}`}
          ></span>
          {categoryName}
        </div>
        <button
          className="text-xs text-slate-500"
          onClick={changeShowingStatus}
        >
          {showCompletedTask ? 'Hide' : 'Show'}
        </button>
      </header>
      <div>
        <Tasks category={categoryName} showCompletedTask={showCompletedTask} />
      </div>
    </section>
  );
};

export default Category;
