import {Loading} from 'src/Components';
import {UserRoles, UserRoleTypes} from 'src/Constants';
import React, {Suspense, lazy} from 'react';

type Route = {
    view: React.ComponentType;
    permissions: UserRoleTypes[];
    path: string;
};

const Loadable = (Component: React.ComponentType) => function mimi(props: never): React.ComponentType {
  return (
    <Suspense fallback={<Loading animation={null} width={10} height={10}/>}>
      <Component {...props} />
    </Suspense>
  );
};

export const Home: Route = {
  view: Loadable(lazy(() => import('src/Views/Homepage'))),
  permissions: [UserRoles.ADMIN],
  path: '/',
};

export const TasksNewPage: Route = {
  view: Loadable(lazy(() => import('src/Views/NewTask'))),
  permissions: [UserRoles.ADMIN],
  path: '/new-task',
};

export const LoginPage: Route = {
  view: Loadable(lazy(() => import('src/Views/Login'))),
  permissions: [],
  path: '/login',
};

export const LogoutPage: Route = {
  view: Loadable(lazy(() => import('src/Views/Logout'))),
  permissions: [],
  path: '/logout',
};

export const RegisterPage: Route = {
  view: Loadable(lazy(() => import('src/Views/Register'))),
  permissions: [],
  path: '/register',
};

export const NotFoundPage: Route = {
  view: Loadable(lazy(() => import('src/Views/NotFound'))),
  permissions: [],
  path: '/not-found',
};

export const allRoutes: Route[] = [
  Home,
  TasksNewPage,
  LoginPage,
  LogoutPage,
  NotFoundPage,
  RegisterPage,
];
