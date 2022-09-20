import { FC, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Routes } from 'constants/routes';
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';

const MainLayout: FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
export default MainLayout;
