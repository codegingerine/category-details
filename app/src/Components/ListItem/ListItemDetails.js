import React from "react";
import PropTypes from "prop-types";
import {
  InputStyled,
  InputWrapperDetStyled,
  ListIconDetStyled,
  ListJointDetailsStyled,
  ListJointTextStyled
} from "./ListItem.styled";

export const ListItemDetails = React.forwardRef(
  ({ detValue, readOnly, onDelete }, ref) => {
    return (
      <InputWrapperDetStyled>
        <ListJointDetailsStyled>
          <ListJointTextStyled>Or</ListJointTextStyled>
        </ListJointDetailsStyled>
        <InputStyled
          type="text"
          value={detValue}
          ref={ref}
          readOnly={readOnly}
        />
        {onDelete && <ListIconDetStyled isRemoveIcon callback={onDelete} />}
      </InputWrapperDetStyled>
    );
  }
);

ListItemDetails.propTypes = {
  detValue: PropTypes.string,
  onDelete: PropTypes.func,
  readOnly: PropTypes.bool,
};
