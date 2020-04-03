import React, { Component } from "react";
import List from "../../Components/List";
import {
  SectionWrapperStyled,
  SectionTiteStyled,
  ListWrapperStyled,
  ListTiteStyled
} from "./People.styled";

const People = () => {
  return (
    <SectionWrapperStyled>
      <SectionTiteStyled>Zadanie rekrutacyjne</SectionTiteStyled>
      <ListWrapperStyled>
        <ListTiteStyled>People</ListTiteStyled>
        <List />
      </ListWrapperStyled>
    </SectionWrapperStyled>
  );
};

export default People;
