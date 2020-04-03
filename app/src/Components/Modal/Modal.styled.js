import styled from "styled-components";
import Button from "../Button";
import InputItem from "../InputItem";
import Icon from "../Icon";

export const ModalStyled = styled.div`
  position: absolute;
  width: 438px;
  bottom: -60px;
  right: 0px;
  background: #f5f5f5;
  border-radius: 5px;
  border: 1px solid rgba(186, 184, 230, 0.31);
  box-shadow: 0 7px 23px 0 rgba(186, 184, 230, 0.31);
  padding: 50px;
  z-index: 10;
`;

export const ModalFormStyled = styled.form`
  width: 100%;
`;

export const ModalInputItemStyled = styled(InputItem)`
  max-width: 400px;
`;

export const ModalTitleStyled = styled.h3`
  color: #4b597b;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 30px;
  margin-bottom: 20px;
`;

export const ModalButtonStyled = styled(Button)`
  margin-top: 30px;
`;

export const ModalIconStyled = styled(Icon)`
  position: absolute;
  top: 24px;
  right: 33px;
`;
