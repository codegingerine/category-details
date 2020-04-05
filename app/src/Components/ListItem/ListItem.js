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
  ListIconDetStyled
} from "./ListItem.styled";

const ListItem = React.forwardRef(
  ({ value, onDelete, readOnly, itemType = "single", children }, ref) => {
    return (
      <React.Fragment>
        {itemType === "single" && (
          <ListItemStyled itemType={itemType}>
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
            </InputWrapperStyled>
          </ListItemStyled>
        )}
        {itemType === "detailed" && (
          <ListItemDetStyled itemType={itemType}>
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
  value: PropTypes.string,
  onDelete: PropTypes.func,
  readOnly: PropTypes.bool,
  itemType: PropTypes.oneOf(['single', 'detailed']),
  children: PropTypes.any,
};

export default ListItem;
