import React from 'react';
import loadable from 'src/utils/loadable';
import { RouteObject } from 'react-router-dom';
import Layout from 'src/components/Layout';

const CommentRouter: RouteObject[] = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/comment/list',
        element: loadable(() => import('src/pages/CommentList')),
      },
      {
        path: '/comment/:id',
        element: loadable(() => import('src/pages/CommentDetail')),
      },
    ],
  },
];

export default CommentRouter;
