import React from "react";
import PropTypes from "prop-types";
import {
  ItemTitleStyled
} from "./ItemTitle.styled";

const ItemTitle = React.forwardRef(({ value }, ref) => {
  return (
    <ItemTitleStyled ref={ref}>
      {value && value}
    </ItemTitleStyled>
  );
});

ItemTitle.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ItemTitle;
