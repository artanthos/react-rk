import styled from 'styled-components';
import { Colors, FontWeight } from 'Styles/Theme';

export const StyledHeading = styled.div`
  font-family: 'Plus Jakarta Sans'!important;
  width: 100%;
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.alignment || 'left'};
  color: ${(props) => props.color || '#162E4C'};
  text-transform: ${(props) => props.textTransform || 'none'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: ${(props) => props.lineHeight};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.alignment || 'left'};
  position: relative;

  .v-spacer {
    display: inline-block;
    width: 4px;
    height: 24px;
    background: linear-gradient(90deg, #4591F9 0%, #04ECF6 100%);
    border-radius: 4px;
  }

  .h-spacer {
    position: absolute;
    display: inline-block;
    left: 0;
    bottom: -16px;
    width: 64px;
    height: 4px;
    background: linear-gradient(90deg, #4591F9 0%, #04ECF6 100%);
    border-radius: 4px;
  }

  .order-wrapper {
    display: inline-block;
    width: 40px;
    height: 40px;
    filter: drop-shadow(0px 2px 4px rgba(17, 17, 17, 0.24));
    border-radius: 40px;
    background: linear-gradient(180deg, #4591F9 0%, #04ECF6 100%);

    .order {
      margin: 5px;
      display: inline-block;
      text-align: center;
      background-color: ${Colors.light};
      color: #162E4C;
      font-weight: ${FontWeight.bold};
      width: 30px;
      height: 30px;
      border-radius: 20px;
    }
  }
`;
