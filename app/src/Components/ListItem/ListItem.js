import React from "react";
import {
  ListItemStyled,
  ListJointStyled,
  ListJointTextStyled,
  InputItemStyled,
  ListIconStyled
} from "./ListItem.styled";

const ListItem = React.forwardRef(
  ({ value, placeholder, onDelete, readOnly }, ref) => {
    return (
      <ListItemStyled>
        <ListJointStyled>
          <ListJointTextStyled>And</ListJointTextStyled>
        </ListJointStyled>
        <InputItemStyled
          type="text"
          placeholder={placeholder}
          value={value}
          ref={ref}
          readOnly={readOnly}
          onDelete={onDelete}
        />
      </ListItemStyled>
    );
  }
);

export default ListItem;
