import React from "react";
import PropTypes from "prop-types";
import {
  ItemJoinStyled,
  ItemJoinTextStyled
} from "./ItemJoin.styled";

const ItemJoin = ({ className, main, text }) => {
  return (
    <ItemJoinStyled className={className} main={main}>
      <ItemJoinTextStyled>{text}</ItemJoinTextStyled>
    </ItemJoinStyled>
  );
};

ItemJoin.propTypes = {
  className: PropTypes.string,
  main: PropTypes.bool,
  text: PropTypes.string,
};

ItemJoin.defaultProps = {
  text: "and"
};

export default ItemJoin;
