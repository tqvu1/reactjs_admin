import React from 'react';
import { RouteObject } from 'react-router-dom';

import RestrictLayout from 'src/components/Application/RestrictLayout';
import loadable from 'src/utils/loadable';

const AuthRoute: RouteObject[] = [
  {
    element: <RestrictLayout />,
    children: [
      {
        path: '/login',
        element: loadable(() => import('src/pages/Login')),
      },
    ],
  },
];

export default AuthRoute;
