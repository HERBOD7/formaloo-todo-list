import React from 'react';
import { Outlet } from 'react-router-dom';
import TaskProvider from 'src/context/TaskProvider';
import './DefaultLayout.scss';

const DefaultLayout = () => {
  return (
    <TaskProvider>
      <div className="DefaultLayout w-full flex justify-center h-full overflow-y-scroll">
        <Outlet />
      </div>
    </TaskProvider>
  );
};

export default DefaultLayout;
