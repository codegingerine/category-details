import styled from "styled-components";
import { media } from "./../../../utils/media";

export const SectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const SectionTiteStyled = styled.h1`
  font-size: 42px;
  font-weight: 700;
  letter-spacing: 0.99px;
  line-height: 57px;
  text-align: center;
`;

export const SectionWrapperStyled = styled.div`
  width: 100%;
  max-width: 800px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 37px 0 rgba(225, 230, 255, 0.54);
  padding: 30px 15px;
  margin: 75px 0 98px;

  ${media.sm`
    padding: 77px 74px;
  `}
`;