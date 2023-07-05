import styled from 'styled-components';
import {Container} from 'reactstrap';
import {Colors, Sizes, FontWeight} from 'src/Styles/Theme';
import svg from './footer.svg';

export const FooterWrapper = styled.footer`
  height: 312px;
  background-image: url("${svg}");
  background-repeat: no-repeat no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1rem;

  a {
    display: inline-block;
    color: ${Colors.darkText};
    position: relative;
    top: 0;
    transition: all .2s ease-in-out;
    padding-bottom: 12px;
    text-decoration: none;
    font-weight: ${FontWeight.normal};
    font-size: ${Sizes.default};

    &:after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      width: 50%;
      height: 4px;
      margin-left: 25%;
      background: linear-gradient(90deg, #4591F9 0%, #04ECF6 100%);
      border-radius: 4px;
    }

    &:hover {
      transition: all .2s ease-in-out;
      padding-bottom: 15px;
      top: 0px;
      color: ${Colors.darkText};

      &:after {
        transition: all .2s ease-in-out;
        background: linear-gradient(90deg, #04ECF6 0%, #4591F9 100%);
        bottom: 0px;
        border-radius: 4px;
      }
    }
  }
`;

export const FooterContainer = styled(Container)`
  padding: 1rem 0;

  & > div {
    padding-bottom: 1rem;
  }
`;
