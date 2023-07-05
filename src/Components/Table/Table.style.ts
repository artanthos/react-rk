import styled from 'styled-components';
import {Colors, Sizes, LineHeight} from 'src/Styles/Theme';

export const StyledTable = styled.table`
  width: 100%;
  font-family: 'Plus Jakarta Sans';
  font-size: ${Sizes.default};
  line-height: ${LineHeight.small};
  color: #254D80;

  thead {
    color: ${Colors.light};

    tr {
      background-color: ${Colors.primary};
      border-radius: 8px;

      th {
        padding: 13px;
      }
    }

    tr {
      th:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      th:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 13px;
      }
    }

    tr:nth-child(even) {
      background: #F2F2F2;
    }

    tr:nth-child(odd) {
      background: #FFFFFF;
    }

    tr {
      border-bottom: 1px solid #E6E6EA;
    }
  }

  &.header-center {
    th {
      text-align: center;
    }
  }

  &.body-center {
    td {
      text-align: center;
    }
  }

  &.center {
    th, td {
      text-align: center;
    }
  }

  th.text-left, td.text-left {
    text-align: left;
  }

  th.text-right, td.text-right {
    text-align: right;
  }

  th.text-center, td.text-center {
    text-align: center;
  }

  &.tasks td:first-child {
    word-break: break-all;
  }
`;
