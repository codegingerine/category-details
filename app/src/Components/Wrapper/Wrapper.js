import React from "react";
import { WrapperStyled, Path1Svg, MaskSvg, Line1Svg, Line2Svg, Line3Svg } from "./Wrapper.styled";

const Wrapper = ({ children }) => {
  return (
    <WrapperStyled>
      {children && children}
      <Path1Svg />
      <MaskSvg />
      <Line1Svg />
      <Line2Svg />
      <Line3Svg />
    </WrapperStyled>
  );
};

export default Wrapper;
