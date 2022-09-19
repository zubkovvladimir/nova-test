import { FC, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import './MainLayout.scss';
import { Routes } from 'constants/routes';

const MainLayout: FC = () => {
  const toggle = () => {
    console.log('sdsd');
  };

  return (
    // <Layout className="layout">
    //   <Header collapsed={drawerIsCollapsed} toggle={toggle} />

    //   <Layout style={{ marginTop: 10 }}>
    //     <Sider className="layout__sider" collapsed={drawerIsCollapsed} collapsible trigger={null}>
    //       <SideMenu />
    //     </Sider>
    //     <Content className="layout__content">
    //       <Suspense fallback={<Spin />}>
    //         <Outlet />
    //       </Suspense>
    //     </Content>
    //   </Layout>
    // </Layout>
    <div>MainLayout</div>
  );
};

export default MainLayout;
