/* eslint-disable max-len */
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { Colors, Sizes, FontWeight } from 'src/Styles/Theme';

export const FooterWrapper = styled.footer`
  height: 312px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='1920' height='312' viewBox='0 0 1920 312' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 186L1920 0V312H0V186Z' fill='%23F8F8FD'/%3e%3c/svg%3e");
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

