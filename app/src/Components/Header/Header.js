import React from "react";
import MenuItem from "./MenuItem";
import {
  HeaderStyled,
  MenuStyled,
  LogoWrapepr,
  LogoInner,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <LogoWrapepr>
        <LogoInner>easy notes</LogoInner>
      </LogoWrapepr>
      <MenuStyled>
        <MenuItem to="/" label="M" />
        <MenuItem to="/notes" label="N" />
        <MenuItem to="/articles" label="A" />
      </MenuStyled>
    </HeaderStyled>
  );
};

export default Header;
