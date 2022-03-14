import React from 'react';
import { Layout } from 'antd';
import { Outlet, Navigate } from 'react-router-dom';

import Header from './Header';
import Sider from './Sider';
import LocalStorage from 'src/utils/LocalStorage';
import styled from 'styled-components';

const AppLayout: React.FC = () => {
  const accessToken = LocalStorage.accessToken || true;

  return accessToken ? (
    <StyledLayout className="app_layout">
      <Sider />
      <Layout.Content className="content_layout">
        <Header />
        <Outlet />
      </Layout.Content>
    </StyledLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export default AppLayout;
