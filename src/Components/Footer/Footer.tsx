import React from 'react';
import {FooterWrapper, FooterContainer} from './Footer.style';

const Footer: React.FC = () => (
  <FooterWrapper className='mt-auto'>
    <FooterContainer
      className='h-50 d-flex flex-md-row flex-column justify-content-around align-items-lg-end align-items-md-center'>
      <div className='text-center order-md-0 order-0'>
        <a href='#'>Contact us</a>
      </div>
      <div className='text-center order-md-1 order-2'>
        <p>
          <span>{`© ${new Date().getFullYear()}`}</span>
        </p>
      </div>
      <div className='text-center order-md-2 order-1'>
        <a href='#'>Terms of use</a>
      </div>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
