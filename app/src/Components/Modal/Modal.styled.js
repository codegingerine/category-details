import styled from "styled-components";
import { media } from "./../../../utils/media";
import Button from "../Button";
import Input from "../Input";
import Icon from "../Icon";

export const ModalStyled = styled.div`
  position: absolute;
  width: 100%;
  max-width: 414px;
  bottom: -24px;
  left: 12px;
  background: #f5f5f5;
  border-radius: 5px;
  border: 1px solid rgba(186, 184, 230, 0.31);
  box-shadow: 0 7px 23px 0 rgba(186, 184, 230, 0.31);
  padding: 50px;
  z-index: 10;

  ${media.md`
    width: 438px;
    max-width: none;
    left: auto;
    right: 0;
    bottom: -60px;
  `}
`;

export const ModalFormStyled = styled.form`
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ModalTitleStyled = styled.h3`
  color: #4b597b;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 24px;
  margin-bottom: 15px;
`;

export const ModalButtonStyled = styled(Button)`
  margin-top: 20px;
`;

export const ModalIconStyled = styled(Icon)`
  position: absolute;
  top: 24px;
  right: 33px;
`;

export const ModalInputStyled = styled(Input)`
  max-width: 400px;
  height: auto;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid rgba(75,89,123,0.3);
  border-radius: 4px;
`;