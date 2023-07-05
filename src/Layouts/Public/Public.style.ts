import styled from 'styled-components';

export const PublicLayoutWrapper = styled.div`
  box-sizing: border-box;
  height: auto;
  width: 100%;
  position: relative;

  .top-bg {
    display: block;
    position: fixed;
    top: -25px;
    right: -50px;
    z-index: -999999;
  }

  .bottom-bg {
    display: block;
    position: fixed;
    left: -50px;
    bottom: -10px;
    z-index: -999999;
  }

  .copyright {
    z-index: 1;
  }
`;
