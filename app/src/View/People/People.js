import React from "react";
import List from "./List";
import {
  SectionWrapperStyled,
  SectionTiteStyled,
  ListWrapperStyled,
  ListTiteStyled
} from "./People.styled";

const People = () => {
  return (
    <SectionWrapperStyled>
      <SectionTiteStyled>Category listing</SectionTiteStyled>
      <ListWrapperStyled>
        <ListTiteStyled>People</ListTiteStyled>
        <List />
      </ListWrapperStyled>
    </SectionWrapperStyled>
  );
};

export default People;
