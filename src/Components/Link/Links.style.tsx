import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors, Sizes } from 'src/Styles/Theme';

export const StyledLink = styled(({
  fontSize, textTransform, textDecoration, isBlueColor, ...rest
}) => <Link {...rest} />)`
  display: inline-block;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: ${(props) => props.fontSize};
  line-height: ${Sizes.small};
  letter-spacing: 0.1em;
  text-transform: ${(props) => props.textTransform || 'none'};
  color: ${(props) => (props.isBlueColor ? Colors.primary : Colors.darkText)};
  position: relative;
  top: 0;
  transition: all .2s ease-in-out;
  padding-bottom: 12px;
  text-decoration: none;

  ${(props) => props.textDecoration === true && `
    &:after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #4591F9 0%, #04ECF6 100%);
      border-radius: 4px;
    }

    &:hover {
      transition: all .2s ease-in-out;
      padding-bottom: 12px;
      top: -3px;
      color: ${Colors.darkText};
      &:after {
        transition: all .2s ease-in-out;
        background: linear-gradient(90deg, #04ECF6 0%, #4591F9 100%);
        bottom: 0px;
        border-radius: 4px;
      }
    }
  `}
`;

