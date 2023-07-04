import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'Components/Icon';
import { StyledButtonLarge, StyledButtonSmall, StyledButtonExtraSmall } from './Button.style';

const ButtonTypes = {
  xs: StyledButtonExtraSmall,
  sm: StyledButtonSmall,
  lg: StyledButtonLarge,
};

const Button = (props) => {
  const {
    children, size, type, onClick, icon, iconPosition, href, ...rest
  } = props;

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

  if (href !== '') {
    return (
      <StyledButton
        as='a'
        href={href}
        {...rest}
      >
        {icon ? ButtonWithIconChildren[iconPosition] : children}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      {...rest}
    >
      {icon ? ButtonWithIconChildren[iconPosition] : children}
    </StyledButton>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['lg', 'sm', 'xs']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  href: PropTypes.string,
};

Button.defaultProps = {
  size: 'lg',
  type: 'button',
  onClick: undefined,
  iconPosition: 'left',
  href: '',
};

export default Button;
