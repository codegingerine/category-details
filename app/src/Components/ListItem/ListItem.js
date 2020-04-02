import React from 'react';
import {
  ListItemStyled,
  ListJointStyled,
  ListJointTextStyled,
  ListInputWrapperStyled,
  ListInputStyled,
	ListIconStyled,
} from "./ListItem.styled";

const ListItem = ({ defaultText, onDelete }) => {
  return (
    <ListItemStyled>
    <ListJointStyled>
      <ListJointTextStyled>And</ListJointTextStyled>
    </ListJointStyled>
    <ListInputWrapperStyled>
      <ListInputStyled type="text" defaultValue={defaultText} />
      <ListIconStyled isRemoveIcon callback={onDelete} />
    </ListInputWrapperStyled>
  </ListItemStyled>
  );
};

export default ListItem;