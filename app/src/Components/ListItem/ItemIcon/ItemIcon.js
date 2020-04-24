import React from "react";
import PropTypes from "prop-types";
import { ItemIconStyled } from "./ItemIcon.styled";

const ItemIcon = ({ main, onDelete }) => (
  <ItemIconStyled isRemoveIcon callback={onDelete} main={main} />
);

ItemIcon.propTypes = {
  main: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
};

export default ItemIcon;
