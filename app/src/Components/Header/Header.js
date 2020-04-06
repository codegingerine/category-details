import React from "react";
import { HeaderStyled, LogoWrapperStyled, NameWrapperStyled, NameStyled } from './Header.styled';

const Header = ({ className,logoItem, name = 'logo' }) => {
  return (
    <HeaderStyled>
      <LogoWrapperStyled className={className} LogoItem={logoItem}>
        {logoItem ? logoItem : <NameWrapperStyled><NameStyled>{name}</NameStyled></NameWrapperStyled>}
      </LogoWrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
