import React, { useState, useEffect } from 'react';
import Tasks from '../Tasks';
import { useTasks } from 'src/context/TaskProvider';
import Status from './status';

const Category = (props) => {
  const { categoryName } = props;
  const { tasks } = useTasks();
  const [showCompletedTask, setShowCompletedTask] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [tasksCount, setTasksCount] = useState(0);

  const changeShowingStatus = () => {
    setShowCompletedTask(!showCompletedTask);
  };

  useEffect(() => {
    const categoryTasks = tasks[categoryName];
    let count = 0;
    for (let task of categoryTasks) {
      if (task.status === 'Done') {
        count = ++count;
      }
    }
    setTasksCount(categoryTasks.length);
    setCompletedCount(count);
  }, [tasks, categoryName]);

  return (
    <section>
      <header className="flex items-center justify-between py-1 border-b border-stone-300">
        <div className="flex items-center">
          <span
            className={`h-2 w-2 mr-1 rounded Categories__item--${categoryName}`}
          ></span>
          <p className="text-sm font-bold">{categoryName}</p>
          <Status tasksCount={tasksCount} completedCount={completedCount} />
        </div>
        <button
          className="text-xs text-slate-500"
          onClick={changeShowingStatus}
        >
          {showCompletedTask && tasksCount !== 0 ? 'Hide' : ''}
          {!showCompletedTask && tasksCount !== 0 ? 'Show' : ''}
        </button>
      </header>
      <div>
        <Tasks category={categoryName} showCompletedTask={showCompletedTask} />
      </div>
    </section>
  );
};

export default Category;
