import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import LocalStorage from 'src/utils/LocalStorage';

const RestrictLayout: React.FC = () => {
  return LocalStorage.accessToken ? <Navigate to={'/'} replace /> : <Outlet />;
};

export default RestrictLayout;
