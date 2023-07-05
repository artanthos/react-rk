import React, {memo} from 'react';
import {Outlet} from 'react-router-dom';
import {Footer} from 'src/Components';
import {PublicLayoutWrapper} from './Public.style';

const PublicLayout: React.FC = () => (
  <PublicLayoutWrapper className='d-flex flex-column min-vh-100'>
    <Outlet/>
    <Footer/>
  </PublicLayoutWrapper>
);

export default memo(PublicLayout);
