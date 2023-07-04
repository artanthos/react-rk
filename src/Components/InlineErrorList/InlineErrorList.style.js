import styled from 'styled-components';
import {
  Colors, Sizes, LineHeight, FontWeight,
} from 'Styles/Theme';

export const InlineErrorListWrapper = styled.div`
  width: 100%;
  font-size: ${Sizes.default};
  font-weight: ${FontWeight.medium};
  line-height: ${LineHeight.small};
  color: ${Colors.error};

  ul {
    margin-bottom: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 4px 0px;
  }
`;
