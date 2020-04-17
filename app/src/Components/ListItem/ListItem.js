import React from "react";
import PropTypes from "prop-types";
import {
  ListItemStyled,
  ListJointMainStyled,
  ListJointTextStyled,
  InputWrapperStyled,
  InputStyled,
  ListIconStyled,
  ListItemDetListStyled,
  ListItemDetStyled,
  ListIconDetStyled,
  ListItemDescriptStyled,
} from "./ListItem.styled";

const ListItem = React.forwardRef(
  (
    {
      className,
      value,
      onDelete,
      readOnly,
      itemType = "single",
      children,
      description
    },
    ref
  ) => {
    return (
      <React.Fragment>
        {itemType === "single" && (
          <ListItemStyled itemType={itemType} className={className}>
            <ListJointMainStyled>
              <ListJointTextStyled>And</ListJointTextStyled>
            </ListJointMainStyled>
            <InputWrapperStyled>
              <InputStyled
                type="text"
                value={value}
                ref={ref}
                readOnly={readOnly}
              />
              {onDelete && <ListIconStyled isRemoveIcon callback={onDelete} />}
              {description && (
                <ListItemDescriptStyled>{description}</ListItemDescriptStyled>
              )}
            </InputWrapperStyled>
          </ListItemStyled>
        )}
        {itemType === "detailed" && (
          <ListItemDetStyled itemType={itemType} className={className}>
            <ListJointMainStyled>
              <ListJointTextStyled>And</ListJointTextStyled>
            </ListJointMainStyled>
            <InputWrapperStyled>
              <InputStyled
                type="text"
                value={value}
                ref={ref}
                readOnly={readOnly}
              />
              {children && (
                <ListItemDetListStyled>{children}</ListItemDetListStyled>
              )}
              {onDelete && (
                <ListIconDetStyled isRemoveIcon callback={onDelete} />
              )}
            </InputWrapperStyled>
          </ListItemDetStyled>
        )}
      </React.Fragment>
    );
  }
);

ListItem.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onDelete: PropTypes.func,
  readOnly: PropTypes.bool,
  itemType: PropTypes.oneOf(["single", "detailed"]),
  children: PropTypes.any
};

export default ListItem;
