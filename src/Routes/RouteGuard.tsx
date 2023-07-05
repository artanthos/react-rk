import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from 'src/Hooks';
import { parseJWT, retrieveCookie } from 'src/Helpers';
import { UserRoles } from 'src/Constants';
import { allRoutes } from './Lazy';

const RouteGuard = ({ children }) => {
  const { pathname } = useLocation();
  const {
    isLoggedIn,
  } = useAuthContext();

  const {
    roles,
  } = parseJWT(retrieveCookie('token'));

  const hasAccessRights = roles && allRoutes.find(
    (item) => pathname === item.path
      && roles === UserRoles.ADMIN,
  );

  if (!hasAccessRights || !isLoggedIn) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default RouteGuard;
