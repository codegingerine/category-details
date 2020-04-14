import React, { Component } from "react";
import CategoryList from "./../../Components/List";
import { initialStateList } from "./initialStateList";
import {
  SectionWrapperStyled,
  SectionTiteStyled,
  ListWrapperStyled,
  ListTiteStyled
} from "./People.styled";

class People extends Component {
  state = {
    listItems: [...initialStateList]
  };

  render() {
    const { listItems } = this.state;

    return (
      <SectionWrapperStyled>
        <SectionTiteStyled>Category listing</SectionTiteStyled>
        <ListWrapperStyled>
          <ListTiteStyled>People</ListTiteStyled>
          <CategoryList mappedList={listItems} />;
        </ListWrapperStyled>
      </SectionWrapperStyled>
    );
  }
}

export default People;
