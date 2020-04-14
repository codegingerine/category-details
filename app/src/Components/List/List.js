import React, { Component } from "react";
import { ListItemDetails } from "./../ListItem/ListItemDetails";
import Modal from "./../Modal/ModalMain";
import ModalDetails from "./../Modal/ModalDetails";
import {
  ListStyled,
  ListIconMainStyled,
  ListIconStyled,
  ListItemStyled
} from "./List.styled";

class List extends Component {
  state = {
    mappedList: this.props.mappedList || [],
    show: false,
    showDetails: false
  };

  handleShowModal = () => {
    this.setState({ show: true });
  };

  handleShowDetailsModal = () => {
    this.setState({ showDetails: true });
  };

  handleAddItem = item => {
    this.setState(prevState => ({
      mappedList: [...prevState.mappedList, item]
    }));
    this.handleCloseModal();
  };

  // TODO: fix for nested details array
  handleAddItemDetail = detItem => {
    this.setState(prevState => ({
      mappedList: [...prevState.mappedList, detItem]
    }));
    this.handleCloseDetailsModal();
  };

  handleRemoveItem = indexToRemove => {
    this.setState(prevState => ({
      mappedList: prevState.mappedList.filter(
        (_, index) => index !== indexToRemove
      )
    }));
  };

  // TODO: fix for nested details array
  handleRemoveDetailItem = indexDetToRemove => {
    this.setState(prevState => ({
      mappedList: prevState.mappedList.filter(
        (_, index) => index !== indexDetToRemove
      )
    }));
  };

  handleCloseModal = () => {
    this.setState({ show: false });
  };

  handleCloseDetailsModal = () => {
    this.setState({ showDetails: false });
  };

  render() {
    const { mappedList, show, showDetails } = this.state;
    return (
      <ListStyled>
        {mappedList.map(({ id, value, itemType, details }, index) => (
          <ListItemStyled
            key={id}
            value={value}
            onDelete={() => this.handleRemoveItem(index)}
            readOnly
            itemType={itemType}
          >
            {details &&
              details.map(({ detId, detValue }, i) => (
                <ListItemDetails
                  key={`det-${detId}`}
                  detValue={detValue}
                  onDelete={() => this.handleRemoveDetailItem(i)}
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
          </ListItemStyled>
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
