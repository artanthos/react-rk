import React from 'react';
import { Spinner } from 'reactstrap';
import { LoadingWrapper } from './Loading.style';

const Loading = ({
  animation, width, height, isFullHeight = false,
}) => (
  <LoadingWrapper
    isFullHeight={isFullHeight}
  >
    <Spinner
      animation={animation}
      style={{
        height: `${width}rem`,
        width: `${height}rem`,
      }}
    />
  </LoadingWrapper>
);

export default Loading;
