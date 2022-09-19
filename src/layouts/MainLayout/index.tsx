import { FC, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import './MainLayout.scss';
import { Routes } from 'constants/routes';
import Header from 'components/shared/Header';

const MainLayout: FC = () => {
  const toggle = () => {
    console.log('sdsd');
  };

  return (
    <div>
      <p>MainLayout</p>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
