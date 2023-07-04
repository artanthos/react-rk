import styled from 'styled-components';
import {
  Colors, Sizes, FontWeight, LineHeight,
} from 'Styles/Theme';

export const StyledMessageBox = styled.div`
  padding: 1.25rem;
  border-radius: 16px;
  font-size: ${Sizes.default};
  font-weight: ${FontWeight.medium};
  line-height: ${LineHeight.small};

  ul {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
  }

  &.message-error {
    background-color: ${Colors.error};
    color: ${Colors.light};

    a {
      text-decoration: none;
      color: ${Colors.darkText};
      font-weight: ${FontWeight.bold};
    }

    a:hover {
      color: ${Colors.light};
    }
  }

  &.message-success {
    background-color: ${Colors.primary};
    color: ${Colors.light};

    a {
      text-decoration: none;
      color: ${Colors.darkText};
      font-weight: ${FontWeight.bold};
    }

    a:hover {
      color: ${Colors.light};
    }
  }
`;
