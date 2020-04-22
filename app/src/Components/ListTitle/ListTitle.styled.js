import styled from "styled-components";
import { media } from "./../../../utils/media";

export const ListTitleStyled = styled.h2`
  display: inline-block;
  max-width: 100%;
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0.44px;
  line-height: 38px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.23);
  border-radius: 7px;
  background: linear-gradient(0deg, #7176f7 0%, #ca75f1 100%);
  box-shadow: 0 7px 19px 0 rgba(125, 118, 246, 0.31);
  padding: 21px 40px;
  margin-bottom: 73px;
  tex-align: center;

  ${media.sm`
    padding: 21px 105px
  `}
`;
