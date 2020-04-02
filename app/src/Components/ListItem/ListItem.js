import React from 'react';
import {
  ListItemStyled,
  ListJointStyled,
  ListJointTextStyled,
  ListInputWrapperStyled,
  ListInputStyled,
	ListIconStyled,
} from "./ListItem.styled";

const ListItem = ({ inputText }) => {
  return (
    <ListItemStyled>
    <ListJointStyled>
      <ListJointTextStyled>And</ListJointTextStyled>
    </ListJointStyled>
    <ListInputWrapperStyled>
      <ListInputStyled type="text" placeholder={inputText} />
      <ListIconStyled isRemoveIcon />
    </ListInputWrapperStyled>
  </ListItemStyled>
  );
};

export default ListItem;