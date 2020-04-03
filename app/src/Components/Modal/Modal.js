import React, { Component } from "react";
import uuid from "uuid";
import {
  ModalStyled,
  ModalFormStyled,
  ModalTitleStyled,
  ModalInputItemStyled,
  ModalButtonStyled,
  ModalIconStyled
} from "./Modal.styled";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.inputValue = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate({
      id: uuid.v4(),
      value: this.inputValue.current.value
    });
    this.inputValue.current.value = "";
  };

  render() {
    const { onClose } = this.props;
    return (
      <ModalStyled onSubmit={this.handleSubmit}>
        <ModalFormStyled>
          <ModalTitleStyled>Add a single item</ModalTitleStyled>
          <ModalInputItemStyled
            placeholder="Fill in item data"
            ref={this.inputValue}
          />
          <ModalButtonStyled buttonText="Add item" />
          <ModalIconStyled isCloseIcon callback={onClose} />
        </ModalFormStyled>
      </ModalStyled>
    );
  }
}

export default Modal;
