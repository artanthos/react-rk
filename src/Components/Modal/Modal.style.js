import styled from 'styled-components';
import { Modal } from 'reactstrap';
import {
  Colors, Sizes, FontWeight, LineHeight,
} from 'Styles/Theme';

export const StyledModal = styled(Modal)`
  top: 15%;

  .modal-content {
    background: ${Colors.light};
    border: 1px solid #E6E6EA;
    box-shadow: 0px 16px 24px rgba(17, 17, 17, 0.16);
    border-radius: 16px;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans';
    font-weight: ${FontWeight.normal};
    font-size: ${Sizes.lg};
    line-height: ${LineHeight.default};
    color: #254D80;
  }

  .modal-header {
    .modal-title {
      font-family: 'Plus Jakarta Sans';
      font-size: ${Sizes.xxl};
      line-height: ${LineHeight.default};
      color: ${Colors.darkText};
    }

    border: 0;
  }

  .modal-body {
    padding-bottom: 0;
  }

  .modal-footer {
    justify-content: flex-start;
    padding: 1.75rem 0.5rem;

    button {
      width: auto;
      padding: 0 25px;
      margin: 0 25px 0 5px;
    }
    border: 0;
  }

  .footer-spacer {
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, #4591F9 0%, #04ECF6 100%);
  }
`;
