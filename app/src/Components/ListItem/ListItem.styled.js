import styled, { css } from "styled-components";
import Icon from "../../Components/Icon";

export const ListJointStyled = styled.div`
  align-self: stretch;
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 24px;
  margin-right: 76px;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: calc(100% + 40px);
    right: 0;
    top: 0;
    border-left: 1px solid #4b597b;
    opacity: 0.3;
  }

  &:after {
    content: "";
    position: absolute;
    width: 76px;
    height: 0;
    right: -76px;
    top: 50%;
    transfrom: translateY(-50%);
    border-top: 1px solid #4b597b;
    opacity: 0.3;
  }
`;

export const ListJointTextStyled = styled.p`
  opacity: 0.4;
  color: #4b597b;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.35px;
  line-height: 30px;
`;

export const ListItemStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 83px;

  &:not(:last-of-type) {
    margin-bottom: 40px;
  }

  &:first-of-type {
    ${ListJointStyled} {
      &:before {
        height: calc(100% + 40px + 73px);
        top: -73px;
      }
    }
  }

  &:last-child {
    ${ListJointStyled} {
      &:before {
        height: calc(100% + 40px + 12px);
      }
    }
  }
`;

export const ListItemDetStyled = styled(ListItemStyled)``;

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
  font-family: Poppins;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 30px;
`;

export const ListIconStyled = styled(Icon)`
  ${({ isRemoveIcon, isAddMainIcon }) => css`
    ${isRemoveIcon &&
      `
      position: absolute;
      bottom: 24px;
      right: 34px;
      `
    }
    ${isAddMainIcon && `margin : 58px 12px 12px 103px;`}
  `}
`;

export const ListIconDetStyled = styled(Icon)`
  ${({ isAddIcon, isRemoveIcon }) => css`
    ${isAddIcon && `margin-left: 75px;`}
    ${isRemoveIcon && `margin-left: 24px;`}
  `}
`;
