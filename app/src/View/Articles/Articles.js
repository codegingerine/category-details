import React, { Component } from "react";
import SectionWrapper from "./../../Components/SectionWrapper";
import List from "./../../Components/List";
import ListTitle from "./../../Components/ListTitle";
import { initialStateList } from "./initialStateList";

class Articles extends Component {
  state = {
    listItems: [...initialStateList],
  };

  render() {
    const { listItems } = this.state;

    return (
      <SectionWrapper title="Articles listing">
        <ListTitle title="Articles" />
        <List mappedList={listItems} />
      </SectionWrapper>
    );
  }
}

export default Articles;
