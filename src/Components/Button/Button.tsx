import React, {ReactNode, MouseEvent} from 'react';
import {Icon} from 'src/Components';
import {StyledButtonLarge, StyledButtonSmall, StyledButtonExtraSmall} from './Button.style';
import {IconProps} from 'src/Components/Icon/Icon.tsx';

interface ButtonProps {
    size?: 'lg' | 'sm' | 'xs';
    type?: 'button' | 'submit' | 'reset';
    // eslint-disable-next-line no-unused-vars
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    icon?: IconProps;
    iconPosition?: 'left' | 'right';
    href?: string;
    children: ReactNode;
    disabled?: boolean;
    isFullWidth?: boolean;
    className?: string;
}

const ButtonTypes = {
  xs: StyledButtonExtraSmall,
  sm: StyledButtonSmall,
  lg: StyledButtonLarge,
};

const Button: React.FC<ButtonProps> = ({
  size = 'lg',
  type = 'button',
  onClick,
  icon,
  iconPosition = 'left',
  href = '',
  children,
  ...rest
}) => {
  const StyledButton = ButtonTypes[size] || StyledButtonLarge;
  const ButtonWithIconChildren = icon && {
    left: (
      <div className='d-flex align-items-center'>
        <Icon {...icon} />
        <div className='ms-2 d-inline-block'>{children}</div>
      </div>
    ),
    right: (
      <div className='d-flex flex-row align-items-center'>
        <div className='me-2 d-inline-block'>{children}</div>
        <Icon {...icon} />
      </div>
    ),
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  if (href !== '') {
    return (
      <StyledButton as='a' href={href} {...rest}>
        {icon && iconPosition && ButtonWithIconChildren ? ButtonWithIconChildren[iconPosition] : children}
      </StyledButton>
    );
  }

  return (
    <StyledButton type={type} onClick={handleClick} {...rest}>
      {icon && iconPosition && ButtonWithIconChildren ? ButtonWithIconChildren[iconPosition] : children}
    </StyledButton>
  );
};

export default Button;
