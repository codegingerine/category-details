import React from "react";
import PropTypes from "prop-types";
import { MenuItemStyled, NavLinkRouterStyled, LabelStyled } from "./MenuItem.styled";

const MenuItem = ({ exact,to, label }) => {
  return (
    <MenuItemStyled>
      <NavLinkRouterStyled exact={exact} to={to}>
        <LabelStyled>{label}</LabelStyled>
      </NavLinkRouterStyled>
    </MenuItemStyled>
  );
};

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

export default MenuItem;
