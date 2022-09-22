import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';

const MainLayout: FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
export default MainLayout;
