import React from "react";
import PropTypes from "prop-types";
import ItemTitle from "./../ItemTitle";
import ItemLink from "./../ItemLink";
import ItemIcon from "./../ItemIcon";
import { ItemDetailStyled, ItemJoinStyled, ItemDetailContentStyled } from './ItemDetail.styled';

const ItemDetail = React.forwardRef(
  ({ detValue, onDelete, link, linkLabel }, ref) => {
    return (
      <ItemDetailStyled>
        <ItemJoinStyled />
        <ItemDetailContentStyled>
          <ItemTitle ref={ref} value={detValue} />
          {link && <ItemLink link={link} linkLabel={linkLabel} ref={ref} />}
          {onDelete && <ItemIcon onDelete={onDelete} />}
        </ItemDetailContentStyled>
      </ItemDetailStyled>
    );
  }
);

ItemDetail.propTypes = {
  detValue: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  link: PropTypes.string,
  linkLabel: PropTypes.string,
};

ItemDetail.defaultProps = {
  linkLabel: "Listen on Spotify",
};

export default ItemDetail;