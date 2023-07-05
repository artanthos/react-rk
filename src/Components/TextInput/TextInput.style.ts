import styled from 'styled-components';
import {Sizes, Colors, FontWeight} from 'src/Styles/Theme';

export const StyledInputWrapper = styled.div`
  & > div {
    position: relative;
    display: flex;
    align-items: center;
  }

  .append {
    position: absolute;
    right: 25px;
  }
`;

export const StyledTextarea = styled.textarea`
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: ${FontWeight.medium};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => (props.hasSuffixIcon ? '10px 65px 10px 15px' : '10px 15px')};
  min-height: 300px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 0;
  border-radius: 20px;
  color: ${Colors.darkText};
  background: #F4F6FC;
  opacity: 1 !important;

  &:focus {
    border: 2px solid #4591F9;
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    border: 0;
    background: #E6E6EA;
    cursor: not-allowed;
  }

  &.errors {
    border: 2px solid ${Colors.error};
    color: ${Colors.error};
  }
`;

export const StyledInput = styled.input`
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: ${FontWeight.medium};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => (props.hasSuffixIcon ? '10px 65px 10px 15px' : '10px 15px')};
  height: 64px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 0;
  border-radius: 100px;
  color: ${Colors.darkText};
  background: #F4F6FC;
  opacity: 1 !important;

  &:focus {
    border: 2px solid #4591F9;
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    border: 0;
    background: #E6E6EA;
    cursor: not-allowed;
  }

  &.errors {
    border: 2px solid ${Colors.error};
    color: ${Colors.error};
  }
`;

export const StyledLabel = styled.label`
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: ${FontWeight.medium};
  font-size: ${Sizes.default};
  text-transform: uppercase;
  color: ${Colors.darkText};
  cursor: pointer;

  &.errors {
    color: ${Colors.error};
  }
`;
