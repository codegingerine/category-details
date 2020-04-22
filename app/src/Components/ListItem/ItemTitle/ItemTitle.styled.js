import styled, { css } from "styled-components";
import { media } from "./../../../../utils/media";

export const ItemTitleStyled = styled.h3`
position: relative;
background-color: #ffffff;
font-family: "Poppins", sans-serif;
color: #4b597b;
font-size: 16px;
font-weight: 700;
letter-spacing: 0.35px;
line-height: 1.4;

${media.sm`
  font-size: 18px;
`}
`;