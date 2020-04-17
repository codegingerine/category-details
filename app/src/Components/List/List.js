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
  handleAddItemDetail = (indexSelected) => {
    this.setState(prevState => ({
      mappedList: prevState.mappedList.map( (item, index) => {
        if ( index === indexSelected ) {
          // item.details = [...item.details, newListItemDetail];
          // console.log(newListItemDetail)
        }
        return item;
      })
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

  handleRemoveDetailItem = (indexSelected, indexDetToRemove) => {
    this.setState(prevState => ({
      mappedList: prevState.mappedList.map( (item, index) => {
        if ( index === indexSelected ) {
          item.details = item.details.filter((_, i) => i !== indexDetToRemove);
        }
        return item;
      })
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
        {mappedList.map(
          ({ id, value, itemType, details, description }, index) => (
            <ListItemStyled
              key={id}
              value={value}
              onDelete={() => this.handleRemoveItem(index)}
              readOnly
              itemType={itemType}
              description={description}
            >
              {details &&
                details.map(({detId, detValue}, i) => (
                  <ListItemDetails
                    key={`det-${detId}`}
                    detValue={detValue}
                    onDelete={() => this.handleRemoveDetailItem(index, i)}
                    readOnly
                  />
                ))}
              <ListIconStyled
                isAddIcon
                callback={this.handleShowDetailsModal}
              />
              {showDetails && (
                <ModalDetails
                  onCreate={() => this.handleAddItemDetail(index)}
                  onClose={this.handleCloseDetailsModal}
                />
              )}
            </ListItemStyled>
          )
        )}
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
