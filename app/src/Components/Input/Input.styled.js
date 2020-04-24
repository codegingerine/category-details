import styled from "styled-components";
import { media } from "./../../../utils/media";

export const ListInputStyled = styled.input`
  height: 79px;
  width: 100%;
  border: 0;
  border-radius: 7px;
  background-color: #ffffff;
  padding: 25px 0 25px 40px;
  font-family: "Poppins", sans-serif;
  color: #4b597b;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.35px;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.sm`
    font-size: 20px;
  `}
`;
