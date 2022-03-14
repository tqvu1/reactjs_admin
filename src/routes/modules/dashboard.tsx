import React from 'react';
import loadable from 'src/utils/loadable';
import { RouteObject } from 'react-router-dom';
import Layout from 'src/components/Layout';

const DashboardRoute: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: loadable(() => import('src/pages/DashBoard')),
      },
    ],
  },
];

export default DashboardRoute;
