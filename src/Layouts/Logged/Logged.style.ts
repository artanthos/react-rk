import styled from 'styled-components';

export const LoggedLayoutWrapper = styled.div`
  box-sizing: border-box;
  height: auto;
  width: 100%;
  position: relative;
  .middle-bg {
    display: block;
    position: fixed;
    left: -50px;
    bottom: -10px;
    z-index: -999999;
  }
`;
