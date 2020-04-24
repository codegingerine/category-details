import React, { Component } from "react";
import Modal from "./../Modal";
import ItemDetail from "./../ListItem/ItemDetail";
import {
  ListStyled,
  ListIconMainStyled,
  ListIconStyled,
  ListItemStyled,
} from "./List.styled";

class List extends Component {
  state = {
    mappedList: this.props.mappedList || [],
    showModal: false,
    showDetails: false,
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleShowDetailsModal = () => {
    this.setState({ showDetails: true });
  };

  handleAddItem = (item) => {
    this.setState((prevState) => ({
      mappedList: [...prevState.mappedList, item],
    }));
    this.handleCloseModal();
  };

  // TODO: fix for nested details array
  handleAddItemDetail = (indexSelected) => {
    this.setState((prevState) => ({
      mappedList: prevState.mappedList.map((item, index) => {
        if (index === indexSelected) {
          item.details = [...item.details, item];
          console.log(item);
        }
        return item;
      }),
    }));
    this.handleCloseDetailsModal();
  };

  handleRemoveItem = (indexToRemove) => {
    this.setState((prevState) => ({
      mappedList: prevState.mappedList.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  handleRemoveDetailItem = (indexSelected, indexDetToRemove) => {
    this.setState((prevState) => ({
      mappedList: prevState.mappedList.map((item, index) => {
        if (index === indexSelected) {
          item.details = item.details.filter((_, i) => i !== indexDetToRemove);
        }
        return item;
      }),
    }));
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleCloseDetailsModal = () => {
    this.setState({ showDetails: false });
  };

  render() {
    const { mappedList, showModal, showDetails } = this.state;

    return (
      <>
        <ListStyled>
          {mappedList.map(
            (
              { id, value, itemType, details, description, link, linkLabel },
              index
            ) => (
              <ListItemStyled
                key={id}
                value={value}
                onDelete={() => this.handleRemoveItem(index)}
                itemType={itemType}
                description={description}
                link={link}
                linkLabel={linkLabel}
              >
                {details &&
                  details.map(({ detId, detValue, linkLabel, link }, i) => (
                    <ItemDetail
                      key={`det-${detId}`}
                      detValue={detValue}
                      onDelete={() => this.handleRemoveDetailItem(index, i)}
                      link={link}
                      linkLabel={linkLabel}
                    />
                  ))}
                <ListIconStyled
                  isAddIcon
                  callback={this.handleShowDetailsModal}
                />
                <Modal
                  secondary
                  isOpen={showDetails}
                  onCreate={() => this.handleAddItemDetail(index)}
                  onClose={this.handleCloseDetailsModal}
                />
              </ListItemStyled>
            )
          )}
        </ListStyled>
        <ListIconMainStyled isAddMainIcon callback={this.handleShowModal} />
        <Modal
          main
          isOpen={showModal}
          onCreate={this.handleAddItem}
          onClose={this.handleCloseModal}
        />
      </>
    );
  }
}

export default List;
