import React from 'react';
import PropTypes from 'prop-types';
import { Sizes, FontWeight } from 'Styles/Theme';
import { StyledLink } from './Links.style';

const Link = ({ children, ...rest }) => (
  <StyledLink {...rest}>{children}</StyledLink>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  textTransform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize', 'none']),
  fontWeight: PropTypes.oneOf([300, 400, 500, 700, 'bold', 'normal']),
  textDecoration: PropTypes.bool,
  isBlueColor: PropTypes.bool,
};

Link.defaultProps = {
  fontSize: Sizes.default,
  textTransform: 'none',
  fontWeight: FontWeight.bold,
  textDecoration: true,
  isBlueColor: false,
};

export default Link;
