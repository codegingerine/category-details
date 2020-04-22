import styled, { css } from "styled-components";
import { media } from "./../../../../utils/media";
import ItemJoin from "./../ItemJoin";

export const ItemJoinStyled = styled(ItemJoin)``;

export const ItemDetailStyled = styled.li`
  position: relative;
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: 14px;
  }

  &:last-of-type {
    ${ItemJoinStyled} {
      &:before {
        height: calc(100% + 27px + 14px);
      }
    }
  }
`;

export const ItemDetailContentStyled = styled.div`
  position: relative;
  width: calc(100% - 15px);
  max-width: 260px;
  padding: 14px 42px 14px 16px;
  border: 1px solid rgba(75, 89, 123, 0.3);
  border-radius: 4px;

  ${media.sm`
    width: 100%;
    max-width: 300px;
  `}
`;