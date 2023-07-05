import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Colors, FontWeight, Sizes} from 'src/Styles/Theme';

export const StyledLink = styled(Link)`
  display: inline-block;
  font-weight: ${FontWeight.bold};
  line-height: ${Sizes.small};
  letter-spacing: 0.1em;
  color: ${Colors.darkText};
  position: relative;
  top: 0;
  transition: all 0.2s ease-in-out;
  padding-bottom: 12px;
  text-decoration: none;

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
    transition: all 0.2s ease-in-out;
    padding-bottom: 12px;
    top: -3px;
    color: ${Colors.darkText};

    &:after {
      transition: all 0.2s ease-in-out;
      background: linear-gradient(90deg, #04ECF6 0%, #4591F9 100%);
      bottom: 0px;
      border-radius: 4px;
    }
  }
`;
