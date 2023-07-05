import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation, Footer } from 'src/Components';
import { LoggedLayoutWrapper } from './Logged.style';

const LoggedLayout = () => (
  <LoggedLayoutWrapper className='d-flex flex-column min-vh-100'>
    <Navigation />
    <Outlet className='mt-5 h-100' />
    <Footer />
  </LoggedLayoutWrapper>
);

export default memo(LoggedLayout);
