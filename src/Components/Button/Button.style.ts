import styled from 'styled-components';
import {
  Sizes, Colors, LineHeight, FontWeight,
} from 'src/Styles/Theme';

interface StyledButtonProps {
    isFullWidth?: boolean;
    as?: string;
    href?: string;
}

export const StyledButtonLarge = styled.button<StyledButtonProps>`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: ${FontWeight.bold};
  font-size: ${Sizes.medium};
  line-height: ${LineHeight.small};
  text-transform: uppercase;
  color: ${Colors.light};
  border: 0;
  height: 72px;
  width: ${(props) => (props.isFullWidth ? '100%' : 'max-content')};
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 18px 49px;
  object-fit: contain;
  border-radius: 100px;
  transition: all .2s ease-in-out;
  background-image: linear-gradient(to right, #4591f9 0%, #04ecf6 100%);
  box-shadow: none;
  text-shadow: 0px 1px 2px rgba(17, 17, 17, 0.24);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-image: linear-gradient(to right, #04ecf6 0%, #4591f9 100%);
    box-shadow: 0 24px 32px 0 rgb(17 17 17 / 16%);
    color: ${Colors.light};
  }

  &.negative {
    background: ${Colors.text};
    background-image: none;

    &:hover {
      background: ${Colors.darkText};
    }
  }

  :disabled {
    background: ${Colors.disabled};
    background-image: none;

    &:hover {
      background: ${Colors.disabled};
      background-image: none;
      box-shadow: none;
      cursor: not-allowed;
    }
  }

  &.rounded-circle {
    padding: 0px;
    width: 68px;
    height: 68px;
  }
`;

export const StyledButtonSmall = styled(StyledButtonLarge)`
  font-size: ${Sizes.small};
  height: 48px;
  padding: 16px 24px;

  &:hover {
    box-shadow: 0px 16px 24px rgba(17, 17, 17, 0.16);
  }

  &.rounded-circle {
    padding: 0px;
    width: 40px;
    height: 40px;
  }
`;

export const StyledButtonExtraSmall = styled(StyledButtonLarge)`
  font-size: ${Sizes.small};
  height: 25px;
  padding: 15px 10px;

  &:hover {
    box-shadow: 0px 16px 24px rgba(17, 17, 17, 0.16);
  }

  &.rounded-circle {
    padding: 0px;
    width: 20px;
    height: 20px;
  }
`;
