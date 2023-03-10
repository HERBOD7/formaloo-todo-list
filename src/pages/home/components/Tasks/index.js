import React from 'react';
import NewTask from 'src/components/NewTask';
import Task from 'src/components/Task';
import { useTasks } from 'src/context/TaskProvider';

const Tasks = (props) => {
  const { category, showCompletedTask } = props;
  const { tasks } = useTasks();
  const categoryTasks = tasks[category];

  const TasksList = () => {
    // check categoryTasks is not empty
    const tasksListItems = categoryTasks.map((task) => {
      if (
        task.status === 'Pending' ||
        (showCompletedTask && task.status === 'Done')
      ) {
        return (
          <li key={task.id}>
            <Task
              id={task.id}
              category={category}
              title={task.title}
              status={task.status}
              creationDate={task.creationDate}
            />
          </li>
        );
      } else {
        return <></>;
      }
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
