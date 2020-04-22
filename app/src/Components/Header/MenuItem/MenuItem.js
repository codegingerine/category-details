import React from "react";
import PropTypes from "prop-types";
import { MenuItemStyled, LinkRouterStyled, LabelStyled } from "./MenuItem.styled";

const MenuItem = ({ to, label }) => {
  return (
    <MenuItemStyled>
      <LinkRouterStyled to={to}>
        <LabelStyled>{label}</LabelStyled>
      </LinkRouterStyled>
    </MenuItemStyled>
  );
};

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MenuItem;
