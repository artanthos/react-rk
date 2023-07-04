import { createGlobalStyle } from 'styled-components';
import { Colors } from './Theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Plus Jakarta Sans', sans-serif;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
    color: rgba(0,0,0,0.84);
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: ${Colors.background};
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 16px;
    line-height: 30px;
    height: 100%;
    position: relative;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  button {
    outline: none;
  }

  button.page-link:focus {
    outline: none;
    box-shadow: none;
  }

  .aqua *{
    color: ${Colors.accent};
  }

  .bi-gradient {
    background: linear-gradient(90deg, #4591F9 0%, #04ECF6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 990px) {
    .mobile-scroll-overflow-x {
      overflow-x: scroll;
    }

    .mobile-overflow-scroll-y {
      overflow-y: scroll;
    }
  }
`;

export default GlobalStyle;
