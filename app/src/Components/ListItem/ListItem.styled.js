import styled, { css } from "styled-components";
import Icon from "../Icon";
import InputItem from "../InputItem";

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

  &:first-child {
    ${ListJointStyled} {
      &:before {
        height: calc(100% + 40px + 73px);
        top: -73px;
      }
    }
  }

  &:nth-last-child {
    ${ListJointStyled} {
      &:before {
        height: calc(100% + 40px + 12px);
      }
    }
  }
`;

export const InputItemStyled = styled(InputItem)``;

export const ListItemDetStyled = styled(ListItemStyled)``;

export const ListIconDetStyled = styled(Icon)`
  ${({ isAddIcon, isRemoveIcon }) => css`
    ${isAddIcon && `margin-left: 75px;`}
    ${isRemoveIcon && `margin-left: 24px;`}
  `}
`;
