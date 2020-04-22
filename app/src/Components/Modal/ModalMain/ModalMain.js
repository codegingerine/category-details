import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import {
  ModalStyled,
  ModalFormStyled,
  ModalTitleStyled,
  ModalButtonStyled,
  ModalIconStyled,
  ModalInputStyled
} from "../Modal.styled";

class ModalMain extends Component {
  constructor(props) {
    super(props);
    this.inputValue = React.createRef();
    this.inputLink = React.createRef();
    this.inputLinkLabel = React.createRef();
    this.inputDescription = React.createRef();
    this.inputDetValue = React.createRef();
    this.inputDetDescription = React.createRef();
  }

  handleSubmitSingle = event => {
    event.preventDefault();
    const { onCreate } = this.props;
    onCreate({
      id: uuid.v4(),
      value: this.inputValue.current.value,
      description: this.inputDescription.current.value,
      link: this.inputLink.current.value,
      linkLabel: this.inputLinkLabel.current.value,
      itemType: "single"
    });
    this.inputValue.current.value = "";
  };

  handleSubmitDetailed = event => {
    event.preventDefault();
    const { onCreate } = this.props;
    onCreate({
      id: uuid.v4(),
      value: this.inputDetValue.current.value,
      description: this.inputDetDescription.current.value,
      itemType: "detailed"
    });
    this.inputDetValue.current.value = "";
  };

  render() {
    const { onClose } = this.props;
    return (
      <ModalStyled>
        <ModalFormStyled onSubmit={this.handleSubmitSingle}>
          <ModalTitleStyled>Add a single item</ModalTitleStyled>
          <ModalInputStyled
            placeholder="Fill in item name"
            ref={this.inputValue}
            required
            maxLength={30}
          />
          <ModalInputStyled
            placeholder="Fill in item description"
            ref={this.inputDescription}
            required
            maxLength={30}
          />
          <ModalInputStyled
            placeholder="Fill in link url"
            ref={this.inputLink}
            required
            maxLength={30}
          />
          <ModalInputStyled
            placeholder="Fill in link label"
            ref={this.inputLinkLabel}
            required
            maxLength={30}
          />
          <ModalButtonStyled type="submit" buttonText="Add item" />
        </ModalFormStyled>
        <ModalFormStyled onSubmit={this.handleSubmitDetailed}>
          <ModalTitleStyled>Add a detailed item</ModalTitleStyled>
          <ModalInputStyled
            placeholder="Fill in item name"
            ref={this.inputDetValue}
            required
            maxLength={30}
          />
          <ModalInputStyled
            placeholder="Fill in item description"
            ref={this.inputDetDescription}
            required
            maxLength={30}
          />
          <ModalButtonStyled type="submit" buttonText="Add item" />
        </ModalFormStyled>
        <ModalIconStyled isCloseIcon callback={onClose} />
      </ModalStyled>
    );
  }
}

ModalMain.propTypes = {
  onClose: PropTypes.func
};

export default ModalMain;
