import React, { useState } from 'react';
import { ReactComponent as DeleteIcon } from 'src/assets/delete.svg';
import { ReactComponent as CheckIcon } from 'src/assets/check.svg';
import { useTasks } from 'src/context/TaskProvider';
import './index.scss';

const Task = (props) => {
  const { id, category, title, status, creationDate } = props;
  const { changeTaskStatus, deleteTask } = useTasks();
  const taskIsCompleted = status === 'Pending' ? false : true;
  const [isCompleted, setCompleted] = useState(taskIsCompleted);
  const completeTask = (e) => {
    if (!isCompleted) {
      setCompleted(e.target.checked);
      changeTaskStatus(id, category, 'Done');
    }
  };

  const removeTask = () => {
    deleteTask(id, category);
  };

  return (
    <div className="flex justify-between items-center my-2 p-2 shadow rounded-md bg-white">
      <div className="flex items-start">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="opacity-0 absolute h-4 w-4"
            checked={isCompleted}
            onChange={completeTask}
          />
          <div className="bg-white border-2 rounded-md border-blue-400 w-5 h-5 flex flex-shrink-0 justify-center items-center focus-within:border-blue-500">
            <CheckIcon className="hidden w-3 h-3 text-blue-600 pointer-events-none" />
          </div>
        </div>

        <div className="ml-2">
          <p className="text-sm Task__title">{title}</p>
          <div className="mt-1 text-xs text-slate-500">{creationDate}</div>
        </div>
      </div>
      <button>{isCompleted ? '' : <DeleteIcon onClick={removeTask} />}</button>
    </div>
  );
};

export default Task;
