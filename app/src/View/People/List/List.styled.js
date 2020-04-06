import styled from "styled-components";
import { media } from "./../../../../utils/media";
import Icon from "./../../../Components/Icon";

export const ListStyled = styled.div`
  position: relative;
  width: 100%;
`;

export const ListIconMainStyled = styled(Icon)`
  margin: 30px 12px 12px 12px;
  ${media.md`
    margin: 70px 12px 12px 117px;
  `}
`;

export const ListIconStyled = styled(Icon)`
  margin: 14px 0 0;
  ${media.sm`
    margin-left: 30px;
  `}
`;
