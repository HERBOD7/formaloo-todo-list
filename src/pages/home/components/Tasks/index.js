import React from 'react';
import NewTask from 'src/components/NewTask';
import Task from 'src/components/Task';

const Tasks = (props) => {
  const { category } = props;
  // static tasks
  const tasks = [
    {
      title: 'Cleaning Desk',
      status: 'Pending',
      creationDate: '09/03/2023',
      id: 1,
    },
    {
      title: 'Cleaning Desk',
      status: 'Done',
      creationDate: '09/03/2023',
      id: 2,
    },
    {
      title: 'Cleaning Desk',
      status: 'Pending',
      creationDate: '09/03/2023',
      id: 3,
    },
    {
      title: 'Cleaning Desk',
      status: 'Pending',
      creationDate: '09/03/2023',
      id: 4,
    },
  ];

  const TasksList = () => {
    const tasksListItems = tasks.map((task) => {
      return (
        <li key={task.id}>
          <Task
            title={task.title}
            status={task.status}
            creationDate={task.creationDate}
          />
        </li>
      );
    });
    return <>{tasksListItems}</>;
  };

  return (
    <ul>
      <TasksList />
      <li>
        <NewTask category={category} />
      </li>
    </ul>
  );
};

export default Tasks;
