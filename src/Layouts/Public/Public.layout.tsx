import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'src/Components';
import { PublicLayoutWrapper } from './Public.style';

const PublicLayout = () => (
  <PublicLayoutWrapper className='d-flex flex-column min-vh-100'>
    <Outlet className='mt-5 h-100' />
    <Footer />
  </PublicLayoutWrapper>
);

export default PublicLayout;
