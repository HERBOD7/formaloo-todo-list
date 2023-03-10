import React, { useContext, createContext, useState, useEffect } from 'react';
import storage from 'src/helper/storage';

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    const categories = {
      Housework: [],
      Personal: [],
      Shopping: [],
      Work: [],
    };

    if (!storage.getItem('tasks')) {
      storage.setItem('tasks', categories);
      setTasks(categories);
    } else {
      const tasksInStorage = storage.getItem('tasks');
      setTasks(tasksInStorage);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(tasks).length) {
      storage.setItem('tasks', tasks);
    }
  }, [tasks]);

  const addTask = (task, category) => {
    const taskId = tasks[category].length + 1;
    setTasks((prevTasks) => {
      const updatedCategory = tasks[category].push({
        title: task,
        status: 'Pending',
        id: taskId,
        creationDate: new Date().toLocaleDateString(),
      });
      return {
        ...prevTasks,
        ...updatedCategory,
      };
    });
  };

  const changeTaskStatus = (id, category, taskStatus) => {
    setTasks((prevTasks) => {
      const updatedTasks = tasks[category].map((task) => {
        const newStatus = task.status === 'Pending' ? 'Done' : 'Pending';
        return task.id === id ? { ...task, status: newStatus } : task;
      });
      return {
        ...prevTasks,
        [category]: updatedTasks,
      };
    });
  };

  const deleteTask = (id, category) => {
    setTasks((prevTasks) => {
      const updatedTasks = tasks[category].filter((task) => task.id !== id);
      return {
        ...prevTasks,
        [category]: updatedTasks,
      };
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, changeTaskStatus, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
