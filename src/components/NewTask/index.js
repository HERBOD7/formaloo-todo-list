import React, { useState } from 'react';
import './index.scss';

const NewTask = (props) => {
  const { category } = props;
  const [newTask, setNewTask] = useState('');
  const addTask = (e) => {
    console.log(e.target.value, category);
    // trim value and check is not empty
    setNewTask('');
  };

  const changeTaskTitle = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="flex items-center my-2 p-2 rounded-md bg-white">
      <div className="NewTask__checkbox bg-white border-2 rounded-md border-blue-200 w-5 h-5"></div>
      <textarea
        type="text"
        placeholder="Add task"
        className="ml-2 outline-0 px-1 text-sm text-slate-800 w-full overflow-hidden resize-none"
        rows="1"
        value={newTask}
        onChange={changeTaskTitle}
        onBlur={addTask}
      ></textarea>
    </div>
  );
};

export default NewTask;
