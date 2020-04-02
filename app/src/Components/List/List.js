import React, { Component } from "react";
import ListItem from "../ListItem";
import { ListStyled, ListIconMainStyled } from "./List.styled";

class List extends Component {
  state = {
    listItems: [
      { id: "default-item-1", defaultText: "Age 40+" },
      { id: "default-item-2", defaultText: "Income yearly 45k USD+"},
    ]
  };

  handleRemoveItem = indexToRemove => {
    this.setState(prevState => {
      const listItems = prevState.listItems.filter(
        (item, index) => index !== indexToRemove
      );
      return { listItems };
    });
  };

  render() {
    return (
      <ListStyled>
        {this.state.listItems.map((item, index) => (
          <ListItem
            key={item.id}
            defaultText={item.defaultText && item.defaultText}
            onDelete={() => this.handleRemoveItem(index)}
          />
        ))}
        <ListIconMainStyled isAddMainIcon />
      </ListStyled>
    );
  }
}

export default List;
