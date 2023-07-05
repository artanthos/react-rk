import React from 'react';
import PropTypes from 'prop-types';
import { Colors, LineHeight, FontWeight } from 'src/Styles/Theme';
import { StyledHeading } from './Heading.style';

const Heading = ({
  type, useVerticalSpacer, useHorizontalSpacer, withNumbering, order, children, ...rest
}) => (
  <StyledHeading
    as={type}
    {...rest}
  >
    {useVerticalSpacer && <span className='v-spacer me-3' />}
    {useHorizontalSpacer && <span className='h-spacer me-3' />}
    {withNumbering && (<span className='order-wrapper me-3'><span className='order'>{order}</span></span>)}
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  fontSize: PropTypes.string.isRequired,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  textTransform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize', 'none']),
  fontWeight: PropTypes.oneOf([300, 500, 700, 'bold', 'normal']),
  lineHeight: PropTypes.string,
  color: PropTypes.string,
  useVerticalSpacer: PropTypes.bool,
  useHorizontalSpacer: PropTypes.bool,
  withNumbering: PropTypes.bool,
  order: PropTypes.number,
};

Heading.defaultProps = {
  alignment: 'left',
  textTransform: 'none',
  fontWeight: FontWeight.light,
  lineHeight: LineHeight.default,
  color: Colors.darkText,
  useVerticalSpacer: false,
  useHorizontalSpacer: false,
  withNumbering: false,
  order: 1,
};

export default Heading;
