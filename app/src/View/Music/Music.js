import React, { Component } from "react";
import SectionWrapper from "./../../Components/SectionWrapper";
import List from "./../../Components/List";
import ListTitle from "./../../Components/ListTitle";
import { initialStateList } from "./initialStateList";

class Music extends Component {
  state = {
    listItems: [...initialStateList],
  };

  render() {
    const { listItems } = this.state;

    return (
      <SectionWrapper title="Music listing">
        <ListTitle title="Musicians" />
        <List mappedList={listItems} />
      </SectionWrapper>
    );
  }
}

export default Music;
