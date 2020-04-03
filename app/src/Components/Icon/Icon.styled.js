import styled, { css } from "styled-components";

export const IconInnerStyled = styled.span`
  font-family: "Josefin Sans", sans-serif;
  color: #ffffff;
  font-size: 20px;
  line-height: 20px;
  font-weight: 900;
  z-index: 2;
`;

const AddIconMix = css`
  text-shadow: 0 2px 4px #12C8B;

  &:before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(0deg, #27e7e7 0%, #f4ff51 100%);
    box-shadow: 0 12px 12px 0 rgba(61, 234, 214, 0.3);
    z-index: 1;
  }
`;

const AddIconInnerMix = css`
  text-shadow: 0 2px 4px #12c8bf;
`;

export const IconStyled = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;

  ${({ isRemoveIcon, isAddIcon, isAddMainIcon, isCloseIcon }) => css`
    ${isRemoveIcon &&
      `
      background: linear-gradient(180deg, #F978A2 0%, #F1435B 100%);
      box-shadow: 0 6px 12px 0 #FFC0C9;
    `}

    ${isAddIcon &&
      `
      height: 40px;
      width: 40px;
      ${AddIconMix}

      ${IconInnerStyled} {
        ${AddIconInnerMix}
      }
    `}

    ${isAddMainIcon &&
      `
      height: 71px;
      width: 71px;
      ${AddIconMix}

      &:after {
        content: '';
        position: absolute;
        display: block;
        left: -12px;
        top: -12px;
        width: calc(100% + 24px);
        height: calc(100% + 24px);
        border-radius: 50%;
        background-color: #FFFFFF;
        box-shadow: 0 12px 12px 0 rgba(61,234,214,0.3);
        z-index: 0;
      }

      ${IconInnerStyled} {
        font-size: 50px;
        line-height: 50px;
        font-weight: 600;
        ${AddIconInnerMix}
      }
    `}

    ${isCloseIcon &&
      `
      background: linear-gradient(180deg, #F978A2 0%, #F1435B 100%);
      box-shadow: 0 6px 12px 0 #FFC0C9;
    `}
  `}
`;
