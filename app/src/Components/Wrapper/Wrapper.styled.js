import styled from "styled-components";
import Path1 from '../../assets/path-1.svg';
import Mask from '../../assets/mask.svg';
import Line1 from '../../assets/line-1.svg';
import Line2 from '../../assets/line-2.svg';
import Line3 from '../../assets/line-3.svg';

export const WrapperStyled = styled.div`
  position: relative;
`;

export const Path1Svg = styled(Path1)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export const MaskSvg = styled(Mask)`
  position: absolute;
  top: 140px;
  left: 0;
  z-index: -1;
`;

export const Line1Svg = styled(Line1)`
  position: absolute;
  top: 220px;
  left: 71px;
  z-index: -1;
`;

export const Line2Svg = styled(Line2)`
  position: absolute;
  top: 500px;
  left: 0;
  z-index: -1;
`;

export const Line3Svg = styled(Line3)`
  position: absolute;
  top: 172px;
  right: 0;
  z-index: -1;
`;
