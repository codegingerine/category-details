import styled, { css } from "styled-components";
import { media } from "./../../../utils/media";
import ItemJoin from "./ItemJoin";

export const ItemJoinStyled = styled(ItemJoin)``;
export const ItemJoinDetStyled = styled(ItemJoin)``;

export const ListItemStyled = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 426px;

  ${media.sm`
    max-width: none;
  `}

  ${media.md`
    padding-left: 50px;
  `}

  &:not(:last-of-type) {
    margin-bottom: 40px;
  }

  &:last-of-type {
    ${ItemJoinStyled} {
      &:before {
         {
          height: calc(100% + 40px + 73px + 12px);
        }
      }
    }
  }
`;

export const ItemWrapperStyled = styled.div`
  flex-grow: 1;
  position: relative;
  display: block;
  width: 100%;
  box-shadow: 0 7px 23px 0 rgba(186, 184, 230, 0.31);
  padding: 0 36px 0 40px;

  ${media.sm`
    max-width: 460px;
  `}

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

export const ItemDescriptionStyled = styled.span`
  display: block;
  width: 100%;
  font-size: 14px;
  color: #4b597b;
  font-weight: 400;
  padding: 4px 0 0;
`;

export const ItemContentStyled = styled.div`
  position: relative;
  padding: 28px 28px 28px 0;
`;

export const ListItemDetStyled = styled(ListItemStyled)`
  ${ItemWrapperStyled} {
    padding: 29px 34px 25px 38px;
  }
`;

export const ItemContentDetStyled = styled.div`
  position: relative;
  width: calc(100% - 15px);
  max-width: 310px;
  border: 1px solid rgba(75, 89, 123, 0.3);
  border-radius: 4px;
  padding: 20px;

  ${media.sm`
    width: 100%;
    max-width: 340px;
    padding-right: 44px;
  `}
`;

export const ItemDetailsListStyled = styled.ul`
  padding: 27px 0 0;
`;
