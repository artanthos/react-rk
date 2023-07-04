import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

import { useAuthContext } from 'Hooks';
import { parseJWT, retrieveCookie } from 'Helpers';
import { StyledNavigation } from './Navigation.style';


const Navigation = () => {
  const {
    isLoggedIn,
  } = useAuthContext();

  const {
    roles,
  } = parseJWT(retrieveCookie('token'));


  return (
    <StyledNavigation>
      <Navbar expand='lg' sticky='top' dark className='navbarBand'>
        <>
          <Nav className='main-nav withIconBi' navbar>
            <NavItem>
              <NavLink
                to='/'
                className='navLink'
              >
                <span
                  className='navLink'
                >
                  <span className='navLinkIcon'>
                    <i className='bi bi-gradient bi-droplet-half' />
                  </span>
                  {' '}
                  <span className='navLinkText'>Light Aqua</span>
                </span>
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className='withIconBi ms-lg-auto me-lg-5'>
            {roles && isLoggedIn && (
              <NavLink
                to='/logout'
                className='aqua'
              >
                <span className='navLinkText'>Logout</span>
              </NavLink>

            )}
          </Nav>
        </>
      </Navbar>
    </StyledNavigation>
  );
};

export default Navigation;
