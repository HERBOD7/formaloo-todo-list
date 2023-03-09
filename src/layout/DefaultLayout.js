import React from 'react';
import { Outlet } from 'react-router-dom';
import './DefaultLayout.scss';

const DefaultLayout = () => {
  return (
    <div className="DefaultLayout w-full flex justify-center h-full">
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
