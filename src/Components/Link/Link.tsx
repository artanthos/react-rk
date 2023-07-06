import React, {ReactNode} from 'react';
import {StyledLink} from './Links.style';

interface LinkProps {
    children: ReactNode;
    to: string;
}

const Link: React.FC<LinkProps> = ({children, ...rest}) => (
  <StyledLink {...rest}>{children}</StyledLink>
);

export default Link;
