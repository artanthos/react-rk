import styled from 'styled-components';
import { FontWeight } from 'Styles/Theme';

export const StyledParagraph = styled.p`
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: ${FontWeight.normal};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.alignment || 'left'};
  color: ${(props) => props.color || '#254D80'};
  text-transform: ${(props) => props.textTransform || 'none'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: ${(props) => props.lineHeight};
  margin: 0;
  margin-top: 0;
  padding: 0;
`;
