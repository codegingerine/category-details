import styled from "styled-components";

export const ButtonInnerStyled = styled.span`
  display: block;
  font-family: "Josefin Sans", sans-serif;
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  text-shadow: 0 2px 4px #12C8B;
  z-index: 2;
`;

export const ButtonStyled = styled.button`
  position: relative;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.23);
  border-radius: 7px;
  background: linear-gradient(0deg, #27e7e7 0%, #f4ff51 100%);
  box-shadow: 0 12px 12px 0 rgba(61, 234, 214, 0.3);
  border: 0;
  outline: none;
  padding: 10px 18px;
  cursor: pointer;
`;
