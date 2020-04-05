import React, { Component } from "react";
import ListItem from "../ListItem";
import { ListItemDetails } from "../ListItem/ListItemDetails";
import Modal from "../Modal/ModalMain";
import ModalDetails from "../Modal/ModalDetails";
import { ListStyled, ListIconMainStyled, ListIconStyled } from "./List.styled";

class List extends Component {
  state = {
    listItems: [
      { id: "default-item-1", value: "Age 40+" },
      {
        id: "default-item-2",
        value: "Ethnicity",
        itemType: "detailed",
        details: [
          {
            id: "det-item-1",
            detValue: "Black"
          },
          {
            id: "det-item-2",
            detValue: "Hispanic"
          }
        ]
      },
      { id: "default-item-3", value: "Income yearly 45k USD+" }
    ],
    show: false,
    showDetails: false
  };

  handleShowModal = event => {
    this.setState({ show: true });
  };

  handleShowDetailsModal = event => {
    this.setState({ showDetails: true });
  };

  handleAddItem = item => {
    this.setState(prevState => ({ listItems: [...prevState.listItems, item] }));
    this.handleCloseModal();
  };

  // TODO: fix for nested details array
  handleAddItemDetail = detItem => {
    this.setState(prevState => ({
      listItems: [...prevState.listItems, detItem]
    }));
    this.handleCloseDetailsModal();
  };

  handleRemoveItem = indexToRemove => {
    this.setState(prevState => ({
      listItems: prevState.listItems.filter(
        (item, index) => index !== indexToRemove
      )
    }));
  };

  // TODO: fix for nested details array
  handleRemoveDetailItem = indexToRemove => {
    this.setState(prevState => ({
      listItems: prevState.listItems.filter(
        (item, index) => index !== indexToRemove
      )
    }));
  };

  handleCloseModal = event => {
    this.setState({ show: false });
  };

  handleCloseDetailsModal = event => {
    this.setState({ showDetails: false });
  };

  render() {
    const { show, showDetails, listItems } = this.state;
    return (
      <ListStyled>
        {listItems.map((item, index) => (
          <ListItem
            key={item.id}
            value={item.value}
            onDelete={() => this.handleRemoveItem(index)}
            readOnly
            itemType={item.itemType}
          >
            {item.details &&
              item.details.map((detItem, i) => (
                <ListItemDetails
                  key={`det-${detItem.id}`}
                  detValue={detItem.detValue}
                  onDelete={() => this.handleRemoveDetailItem(index)}
                  readOnly
                />
              ))}
            <ListIconStyled isAddIcon callback={this.handleShowDetailsModal} />
            {showDetails && (
              <ModalDetails
                onCreate={this.handleAddItemDetail}
                onClose={this.handleCloseDetailsModal}
              />
            )}
          </ListItem>
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
