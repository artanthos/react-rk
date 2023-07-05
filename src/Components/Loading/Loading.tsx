import React from 'react';
import {Spinner} from 'reactstrap';
import {LoadingWrapper} from './Loading.style';

interface LoadingProps {
    animation?: string;
    width: number;
    height: number;
    isFullHeight?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  animation, width, height, isFullHeight = false,
}) => (
  <LoadingWrapper height={isFullHeight ? '100%' : '50vh'}>
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
