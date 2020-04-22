import React from "react";
import MenuItem from "./MenuItem";
import {
  HeaderStyled,
  NavStyled,
  MenuStyled,
  LogoWrapepr,
  LogoInner,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <NavStyled>
        <LogoWrapepr>
          <LogoInner>easy notes</LogoInner>
        </LogoWrapepr>
        <MenuStyled>
          <MenuItem exact to="/" label="M" />
          <MenuItem to="/notes" label="N" />
          <MenuItem to="/articles" label="A" />
        </MenuStyled>
      </NavStyled>
    </HeaderStyled>
  );
};

export default Header;
