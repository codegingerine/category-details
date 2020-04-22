import React, { Component } from "react";
import SectionWrapper from "./../../Components/SectionWrapper";
import List from "./../../Components/List";
import ListTitle from "./../../Components/ListTitle";
import { initialStateList } from "./initialStateList";

class Notes extends Component {
  state = {
    listItems: [...initialStateList],
  };

  render() {
    const { listItems } = this.state;

    return (
      <SectionWrapper title="Notes listing">
        <ListTitle title="Notes" />
        <List mappedList={listItems} />
      </SectionWrapper>
    );
  }
}

export default Notes;
