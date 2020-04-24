import styled, { keyframes } from "styled-components";
import { media } from "./../../../utils/media";
import Icon from "../Icon";

const animModalOnShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  top: 0;
  left: 0;
  animation: ${animModalOnShow} .5s ease-in-out;
  z-index: 100;
`;

export const ModalWrapperStyled = styled.div`
  position: fixed;
  top: 10vh;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  max-width: 414px;
  background: #f5f5f5;
  border-radius: 5px;
  border: 1px solid rgba(186, 184, 230, 0.31);
  box-shadow: 0 7px 23px 0 rgba(186, 184, 230, 0.31);
  padding: 50px;
  z-index: 10;

  ${media.md`
    width: 438px;
    max-width: none;
  `}
`;

export const ModalIconStyled = styled(Icon)`
  position: absolute;
  top: 24px;
  right: 33px;
`;
