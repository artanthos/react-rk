import styled from 'styled-components';

export const StyledIcon = styled.span`
  display: inline-block;
  font-size: ${(props) => props.size}rem;
  line-height: ${(props) => props.size}rem;
  color: ${(props) => props.color};

  &.pointer {
    cursor: pointer;
  }

  ${(props) => props.hasShadow && 'filter: drop-shadow(0px 1px 2px rgba(17, 17, 17, 0.24));'}
`;
