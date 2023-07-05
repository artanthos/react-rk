import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './Icon.style';

const Icon = (props) => {
  const { name, className = '', ...rest } = props;

  return (
    <StyledIcon {...rest} className={`${name} ${className}`} />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  hasShadow: PropTypes.bool,
  isInverted: PropTypes.bool,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  size: 1,
  color: '#FFFFFF',
  hasShadow: false,
  isInverted: false,
  onClick: undefined,
};

export default Icon;
