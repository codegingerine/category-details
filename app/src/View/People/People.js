import React, { Component } from "react";
import ListItem from '../../Components/ListItem';
import {
  SectionWrapperStyled,
  SectionTiteStyled,
	ListWrapperStyled,
	ListTiteStyled,
	ListIconMainStyled,
} from "./People.styled";

class People extends Component {
  render() {
    return (
      <SectionWrapperStyled>
        <SectionTiteStyled>Zadanie rekrutacyjne</SectionTiteStyled>
        <ListWrapperStyled>
          <ListTiteStyled>People</ListTiteStyled>

					<ListItem inputText="Age 40+" />
					<ListItem inputText="Income yearly 45k USD+" />
          <ListIconMainStyled isAddMainIcon />

        </ListWrapperStyled>
      </SectionWrapperStyled>
    );
  }
}

export default People;
