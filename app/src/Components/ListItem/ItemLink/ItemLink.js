import React from "react";
import PropTypes from "prop-types";
import { ItemLinkStyled } from "./ItemLink.styled";

const ItemLink = React.forwardRef(({ link, linkLabel }, ref) => {
  return (
    <ItemLinkStyled
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
    >
      {linkLabel}
    </ItemLinkStyled>
  );
});

ItemLink.propTypes = {
  link: PropTypes.string,
  linkLabel: PropTypes.string
};

ItemLink.defaultProps = {
  linkLabel: "Visit the site"
};

export default ItemLink;
