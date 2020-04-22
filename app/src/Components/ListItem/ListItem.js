import React from "react";
import PropTypes from "prop-types";
import ItemTitle from "./ItemTitle";
import ItemLink from "./ItemLink";
import ItemIcon from "./ItemIcon";
import {
  ListItemStyled,
  ItemJoinStyled,
  ItemWrapperStyled,
  ItemContentStyled,
  ItemDescriptionStyled,
  ListItemDetStyled,
  ItemContentDetStyled,
  ItemDetailsListStyled,
} from "./ListItem.styled";

const ListItem = React.forwardRef(
  (
    {
      className,
      value,
      onDelete,
      itemType,
      children,
      description,
      linkLabel,
      link,
    },
    ref
  ) => {
    return (
      <>
        {itemType === "single" && (
          <ListItemStyled itemType={itemType} className={className}>
            <ItemJoinStyled main text="And" />
            <ItemWrapperStyled>
              <ItemContentStyled>
                <ItemTitle ref={ref} value={value} />
                {description && (
                  <ItemDescriptionStyled ref={ref}>
                    {description}
                  </ItemDescriptionStyled>
                )}
                {link && (
                  <ItemLink link={link} linkLabel={linkLabel} ref={ref} />
                )}
              </ItemContentStyled>
              {onDelete && <ItemIcon main onDelete={onDelete} />}
            </ItemWrapperStyled>
          </ListItemStyled>
        )}
        {itemType === "detailed" && (
          <ListItemDetStyled itemType={itemType} className={className}>
            <ItemJoinStyled main text="And" />
            <ItemWrapperStyled>
              <ItemContentDetStyled>
                <ItemTitle ref={ref} value={value} />
                {description && (
                  <ItemDescriptionStyled ref={ref}>
                    {description}
                  </ItemDescriptionStyled>
                )}
              </ItemContentDetStyled>
              {children && (
                <ItemDetailsListStyled>{children}</ItemDetailsListStyled>
              )}
              {onDelete && <ItemIcon main onDelete={onDelete} />}
            
            </ItemWrapperStyled>
          </ListItemDetStyled>
        )}
      </>
    );
  }
);

ListItem.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  itemType: PropTypes.oneOf(["single", "detailed"]),
  children: PropTypes.any,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkLabel: PropTypes.string,
};

ListItem.defaultProps = {
  itemType: "single",
};

export default ListItem;
