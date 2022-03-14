import React from 'react';
import { RouteObject } from 'react-router-dom';

import loadable from 'src/utils/loadable';
import Layout from 'src/components/Layout';

const UserRoute: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/transaction/list',
        element: loadable(() => import('src/pages/TransactionList')),
      },
    ],
  },
];

export default UserRoute;
