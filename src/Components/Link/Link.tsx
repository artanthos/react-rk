import React, {ReactNode} from 'react';
import {StyledLink} from './Links.style';

interface LinkProps {
    children: ReactNode;
}

const Link = ({children, ...rest}: LinkProps) => (
  <StyledLink {...rest}>{children}</StyledLink>
);

export default Link;
