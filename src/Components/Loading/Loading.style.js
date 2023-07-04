import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.isFullHeight ? '100%' : '50vh')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
