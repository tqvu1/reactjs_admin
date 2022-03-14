import React from 'react';
import { RouteObject } from 'react-router-dom';

import loadable from 'src/utils/loadable';
import Layout from 'src/components/Layout';

const UserRoute: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/user_creator/list',
        element: loadable(() => import('src/pages/UserCreatorList')),
      },
      {
        path: '/user_creator/detail/:id',
        element: loadable(() => import('src/pages/UserCreatorDetail')),
      },
      {
        path: '/user_liked/list',
        element: loadable(() => import('src/pages/UserLikedList')),
      },
      {
        path: '/user_revenue_sharing/list',
        element: loadable(() => import('src/pages/UserRevenueSharingList')),
      },
      {
        path: '/user_revenue_sharing/setting/:id',
        element: loadable(() => import('src/pages/UserRevenueSharingSetting')),
      },
    ],
  },
];

export default UserRoute;
