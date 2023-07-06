import {Loading} from 'src/Components';
import React, {ComponentType, ReactNode, Suspense, lazy} from 'react';

type Route = {
    view: React.ComponentType;
    path: string;
};


const Loadable = (Component: ComponentType<any>) => function LoadableComponent(props: any): ReactNode {
  return (
    <Suspense fallback={<Loading width={10} height={10}/>}>
      <Component {...props} />
    </Suspense>
  );
};

export const Home: Route = {
  view: Loadable(lazy(() => import('src/Views/Homepage'))),
  path: '/',
};

export const TasksNewPage: Route = {
  view: Loadable(lazy(() => import('src/Views/NewTask'))),
  path: '/new-task',
};

export const LoginPage: Route = {
  view: Loadable(lazy(() => import('src/Views/Login'))),
  path: '/login',
};

export const LogoutPage: Route = {
  view: Loadable(lazy(() => import('src/Views/Logout'))),
  path: '/logout',
};

export const RegisterPage: Route = {
  view: Loadable(lazy(() => import('src/Views/Register'))),
  path: '/register',
};

export const NotFoundPage: Route = {
  view: Loadable(lazy(() => import('src/Views/NotFound'))),
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
