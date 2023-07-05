import React from 'react';
import {
  Navigate,
  useRoutes,
} from 'react-router-dom';
import {
  LoggedLayout,
  PublicLayout,
} from 'src/Layouts';
import {
  Home,
  TasksNewPage,
  LoginPage,
  LogoutPage,
  NotFoundPage,
  RegisterPage,
} from './Lazy';
import RouteGuard from './RouteGuard';


const AppRoutes = () => useRoutes([{
  element: <PublicLayout />,
  children: [
    { path: 'login', element: React.createElement(LoginPage.view) },
    { path: 'logout', element: React.createElement(LogoutPage.view) },
    { path: 'register', element: React.createElement(RegisterPage.view) },
    { path: 'not-found', element: React.createElement(NotFoundPage.view) }],
},
{
  element:
  <RouteGuard>
    <LoggedLayout />
  </RouteGuard>,
  children: [
    { element: React.createElement(Home.view), index: true },
    { path: 'new-task', element: React.createElement(TasksNewPage.view) },
  ],
},
{ path: '*', element: <Navigate to='/not-found' replace /> }]);

export default AppRoutes;
