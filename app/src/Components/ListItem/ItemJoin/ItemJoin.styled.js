import styled, { css } from "styled-components";
import { media } from "./../../../../utils/media";

const ItemJoinMix = css`
  align-self: stretch;
  position: relative;
  display: none;
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

export const ItemJoinStyled = styled.div`
  ${ItemJoinMix}
  ${({ main }) => css`
    ${main
      ? `
      margin-right: 76px;
      font-size: 20px;
      &:before {
        height: calc(100% + 40px);
        top: -73px;
      }
      `
      : `
      margin-right: 28px;
      font-size: 16px;
      &:before {
        height: calc(100% + 14px);
        top: -27px;
      }
      &:after {
        width: 28px;
        right: -28px;
      }
      `
    }

    ${media.sm`
      ${!main && `display: flex;`}
    `}
    
    ${media.md`
      ${main && `display: flex;`}
    `}
  `}
`;

export const ItemJoinTextStyled = styled.p`
  opacity: 0.4;
  color: #4b597b;
  font-weight: 500;
  letter-spacing: 0.35px;
  line-height: 30px;
`;
