import styled from "styled-components";
import Icon from "../../Icon";

export const ItemIconStyled = styled(Icon)`
  position: absolute;

  ${({ main }) =>
    main
      ? `
      top: 16px;
      right: 16px;
      `
      : `
      top: 10px;
      right: 10px;
      `}
`;
