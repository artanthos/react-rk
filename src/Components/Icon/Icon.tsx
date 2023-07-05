import React from 'react';
import {StyledIcon} from './Icon.style';

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    hasShadow?: boolean;
    onClick?: () => void;
    className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  ...rest
}) => (
  <StyledIcon {...rest} className={`${name} ${className}`}/>
);

export default Icon;
