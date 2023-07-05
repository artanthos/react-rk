import { Loading } from 'src/Components';
import { UserRoles } from 'src/Constants';
import React, { Suspense, lazy } from 'react';

// eslint-disable-next-line
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loading width={10} height={10} />}>
      <Component {...props} />
    </Suspense>
  );
};

export const Home = {
  view: Loadable(lazy(() => import('src/Views/Homepage'))),
  permissions: [UserRoles.ADMIN],
  path: '/',
};

export const TasksNewPage = {
  view: Loadable(lazy(() => import('src/Views/NewTask'))),
  permissions: [UserRoles.ADMIN],
  path: '/new-task',
};

export const LoginPage = {
  view: Loadable(lazy(() => import('src/Views/Login'))),
  permissions: [],
  path: '/login',
};

export const LogoutPage = {
  view: Loadable(lazy(() => import('src/Views/Logout'))),
  permissions: [],
  path: '/logout',
};

export const RegisterPage = {
  view: Loadable(lazy(() => import('src/Views/Register'))),
  permissions: [],
  path: '/register',
};

export const NotFoundPage = {
  view: Loadable(lazy(() => import('src/Views/NotFound'))),
  permissions: [],
  path: '/not-found',
};

export const allRoutes = [
  Home,
  TasksNewPage,
  LoginPage,
  LogoutPage,
  NotFoundPage,
  RegisterPage,
];
