import { FC, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import './MainLayout.scss';
import { Routes } from 'constants/routes';

const MainLayout: FC = () => {
  const toggle = () => {
    console.log('sdsd');
  };

  return (
    <div>
      <p>MainLayout</p>
      <Outlet />
    </div>
  );
};

export default MainLayout;
