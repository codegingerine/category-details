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

class ModalDetails extends Component {
  constructor(props) {
    super(props);
    this.inputDetValue = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate({
      id: uuid.v4(),
      value: this.inputDetValue.current.value
    });
    this.inputDetValue.current.value = "";
  };

  render() {
    const { onClose } = this.props;
    return (
      <ModalStyled>
        <ModalFormStyled onSubmit={this.handleSubmit}>
          <ModalTitleStyled>Add a detail box</ModalTitleStyled>
          <ModalInputStyled
            placeholder="Fill in the detail name"
            ref={this.inputDetValue}
            required
            maxLength={30}
          />
          <ModalButtonStyled
            buttonText="Add detail"
          />
        </ModalFormStyled>
        <ModalIconStyled isCloseIcon callback={onClose} />
      </ModalStyled>
    );
  }
}

ModalDetails.propTypes = {
  onClose: PropTypes.func,
};

export default ModalDetails;
