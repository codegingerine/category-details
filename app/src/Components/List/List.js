import React, { Component } from "react";
import ListItem from "../ListItem";
import Modal from "../Modal";
import { ListStyled, ListIconMainStyled } from "./List.styled";

class List extends Component {
  state = {
    listItems: [
      { id: "default-item-1", value: "Age 40+" },
      { id: "default-item-2", value: "Income yearly 45k USD+" }
    ],
    show: false
  };

  handleShowModal = event => {
    this.setState({ show: true });
  };

  handleAddItem = item => {
    this.setState(prevState => {
      const listItems = [...prevState.listItems, item];
      return { listItems };
    });
    this.handleCloseModal();
  };

  handleRemoveItem = indexToRemove => {
    this.setState(prevState => {
      const listItems = prevState.listItems.filter(
        (item, index) => index !== indexToRemove
      );
      return { listItems };
    });
  };

  handleCloseModal = event => {
    this.setState({ show: false });
  };

  render() {
    const { show } = this.state;
    return (
      <ListStyled>
        {this.state.listItems.map((item, index) => (
          <ListItem
            key={item.id}
            value={item.value}
            onDelete={() => this.handleRemoveItem(index)}
            readOnly
          />
        ))}
        <ListIconMainStyled isAddMainIcon callback={this.handleShowModal} />
        {show && (
          <Modal
            onCreate={this.handleAddItem}
            onClose={this.handleCloseModal}
          />
        )}
      </ListStyled>
    );
  }
}

export default List;
