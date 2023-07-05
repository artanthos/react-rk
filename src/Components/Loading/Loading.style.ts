import styled from 'styled-components';

interface LoadingWrapperProps {
    height?: string;
}

export const LoadingWrapper = styled.div<LoadingWrapperProps>`
  width: 100%;
  height: ${(props) => (props.height ? '100%' : '50vh')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
