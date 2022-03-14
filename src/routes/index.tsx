import React from 'react';
import { RouteObject } from 'react-router-dom';
import { ForbiddenPage, NotFoundPage, ServerErrorPage } from 'src/pages/Errors';

const modulesRoute = () => {
  const requireModule = require.context('./modules', true, /\.tsx$/);
  const modules: RouteObject[] = [];

  requireModule.keys().forEach((fileName) => {
    const module = requireModule(fileName).default;
    modules.push(...module);
  });

  return modules;
};

const modulesRoutes: RouteObject[] = [
  ...modulesRoute(),
  {
    path: '/404',
    element: <NotFoundPage />,
  },
  {
    path: '/403',
    element: <ForbiddenPage />,
  },
  {
    path: '/500',
    element: <ServerErrorPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default modulesRoutes;
