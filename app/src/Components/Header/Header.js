import React from "react";
import { HeaderStyled, LogoWrapperStyled } from './Header.styled';

const Header = ({ className,logoItem }) => {
  return (
    <HeaderStyled>
      <LogoWrapperStyled className={className} LogoItem={logoItem}>
        {logoItem}
      </LogoWrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
