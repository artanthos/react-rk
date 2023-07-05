import React from 'react';
import PropTypes from 'prop-types';
import { Colors, FontWeight, LineHeight } from 'src/Styles/Theme';
import { StyledParagraph } from './Paragraph.style';

const Paragraph = (props) => {
  const { type, ...rest } = props;

  return (
    <StyledParagraph as={type} {...rest} />
  );
};

Paragraph.propTypes = {
  type: PropTypes.oneOf(['span', 'div', 'p']),
  fontSize: PropTypes.string.isRequired,
  alignment: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  textTransform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize', 'none']),
  fontWeight: PropTypes.oneOf([300, 400, 500, 700, 'bold', 'normal']),
  lineHeight: PropTypes.string,
  color: PropTypes.string,
};

Paragraph.defaultProps = {
  type: 'p',
  alignment: 'left',
  textTransform: 'none',
  fontWeight: FontWeight.light,
  lineHeight: LineHeight.default,
  color: Colors.darkText,
};

export default Paragraph;
