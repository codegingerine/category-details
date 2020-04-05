import styled, { css } from "styled-components";
import Icon from "../Icon";
import Input from "../Input";

const ListJoinMix = css`
  align-self: stretch;
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 25px;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
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

export const ListJointMainStyled = styled.div`
  ${ListJoinMix}
  margin-right: 76px;

  &:before {
    height: calc(100% + 40px);
    top: -73px;
  }
`;

export const ListJointDetailsStyled = styled.div`
  ${ListJoinMix}
  margin-right: 28px;

  &:before {
    height: calc(100% + 9px);
    top: -27px;
  }

  &:after {
    width: 28px;
    right: -28px;
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
  padding-left: 85px;

  &:not(:last-of-type) {
    margin-bottom: 40px;
  }

  &:last-of-type {
    ${ListJointMainStyled} {
      &:before {
        height: calc(100% + 40px + 73px + 12px);
      }
    }
  }
`;

export const InputWrapperStyled = styled.div`
  flex-grow: 1;
  position: relative;
  display: block;
  max-width: 426px;
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

export const InputStyled = styled(Input)``;

export const ListIconStyled = styled(Icon)`
  position: absolute;
  top: 24px;
  right: 25px;
`;

export const ListItemDetListStyled = styled.div`
  padding: 27px 0 0 38px;
`;

export const ListItemDetStyled = styled(ListItemStyled)`
  ${InputWrapperStyled} {
    padding: 29px 0 25px;
  }

  ${InputStyled} {
    height: 51px;
    max-width: 293px;
    padding: 10px 20px;
    border: 1px solid rgba(75, 89, 123, 0.3);
    border-radius: 4px;
    margin-left: 38px;
  }
`;

export const ListIconDetStyled = styled(ListIconStyled)`
  right: 41px;
  top: 40px;
`;

export const InputWrapperDetStyled = styled.div`
  position: relative;
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: 9px;
  }

  ${InputStyled} {
    margin-left: 0;
    max-width: 280px;
  }

  ${ListIconDetStyled} {
    top: 10px;
  }

  &:last-of-type {
    ${ListJointDetailsStyled} {
      &:before {
        height: calc(100% + 27px + 14px);
      }
    }
  }
`;
