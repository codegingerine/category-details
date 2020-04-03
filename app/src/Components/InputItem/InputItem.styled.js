import styled, { css } from "styled-components";
import Icon from "../../Components/Icon";

export const ListInputWrapperStyled = styled.div`
  flex-grow: 1;
  position: relative;
  display: block;
  box-shadow: 0 7px 23px 0 rgba(186, 184, 230, 0.31);

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 7px 0 0 7px;
    background: linear-gradient(0deg, #7176f7 0%, #ca75f1 100%);
    box-shadow: 0 7px 19px 0 rgba(125, 118, 246, 0.31);
  }
`;

export const ListInputStyled = styled.input`
  width: 100%;
  height: 79px;
  border: 0;
  border-radius: 7px;
  background-color: #ffffff;
  padding: 26px 0 25px 40px;
  font-family: "Poppins", sans-serif;
  color: #4b597b;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 30px;
`;

export const ListIconStyled = styled(Icon)`
  ${({ isRemoveIcon }) => css`
    ${isRemoveIcon &&
      `
      position: absolute;
      bottom: 24px;
      right: 34px;
      `}
  `}
`;
