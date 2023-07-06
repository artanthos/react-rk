import React from 'react';
import {StyledIcon} from './Icon.style';

export interface IconProps {
    id?: string;
    name: string;
    size?: number;
    color?: string;
    hasShadow?: boolean;
    className?: string;
    // eslint-disable-next-line no-unused-vars
    onClick?: (e: React.MouseEvent) => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  ...rest
}) => (
  <StyledIcon {...rest} className={`${name} ${className}`}/>
);

export default Icon;
