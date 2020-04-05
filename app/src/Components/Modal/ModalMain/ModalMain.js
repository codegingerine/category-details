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
    this.inputDetValue = React.createRef();
  }

  handleSubmitSingle = event => {
    event.preventDefault();
    this.props.onCreate({
      id: uuid.v4(),
      value: this.inputValue.current.value,
      itemType: "single"
    });
    this.inputValue.current.value = "";
  };

  handleSubmitDetailed = event => {
    event.preventDefault();
    this.props.onCreate({
      id: uuid.v4(),
      value: this.inputDetValue.current.value,
      itemType: "detailed"
    });
    this.inputDetValue.current.value = "";
  };

  render() {
    const { onClose } = this.props;
    return (
      <ModalStyled>
        <ModalFormStyled>
          <ModalTitleStyled>Add a single item</ModalTitleStyled>
          <ModalInputStyled
            placeholder="Fill in item name"
            ref={this.inputValue}
          />
          <ModalButtonStyled
            buttonText="Add item"
            onClick={this.handleSubmitSingle}
          />
        </ModalFormStyled>
        <ModalFormStyled>
          <ModalTitleStyled>Add a detailed item</ModalTitleStyled>
          <ModalInputStyled
            placeholder="Fill in item name"
            ref={this.inputDetValue}
          />
          <ModalButtonStyled
            buttonText="Add item"
            onClick={this.handleSubmitDetailed}
          />
        </ModalFormStyled>
        <ModalIconStyled isCloseIcon callback={onClose} />
      </ModalStyled>
    );
  }
}

ModalMain.propTypes = {
  onClose: PropTypes.func,
};

export default ModalMain;
