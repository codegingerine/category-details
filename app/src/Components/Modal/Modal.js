import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import uuid from "uuid";
import FormSimpleItem from "./FormSimpleItem";
import FormComplexItem from "./FormComplexItem";
import FormItemDetail from "./FormItemDetail";
import {
  ModalStyled,
  ModalWrapperStyled,
  ModalIconStyled,
} from "./Modal.styled";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  constructor(props) {
    super(props);
    this.inputValue = React.createRef();
    this.inputLink = React.createRef();
    this.inputLinkLabel = React.createRef();
    this.inputDescription = React.createRef();
    this.inputDetValue = React.createRef();
    this.inputDetDescription = React.createRef();
    this.inputSubValue = React.createRef();
    this.inputSubDescription = React.createRef();
    this.inputDetail = React.createRef();
    this.inputDetailLink = React.createRef();
    this.inputDetailLinkLabel = React.createRef();
  }

  handleSubmitSimpleItem = (event) => {
    event.preventDefault();
    const { onCreate } = this.props;
    onCreate({
      id: uuid.v4(),
      value: this.inputValue.current.value,
      description: this.inputDescription.current.value,
      link: this.inputLink.current.value,
      linkLabel: this.inputLinkLabel.current.value,
      itemType: "single",
    });
    this.inputValue.current.value = "";
  };

  handleSubmitComplexItem = (event) => {
    event.preventDefault();
    const { onCreate } = this.props;
    onCreate({
      id: uuid.v4(),
      value: this.inputDetValue.current.value,
      description: this.inputDetDescription.current.value,
      itemType: "detailed",
    });
    this.inputDetValue.current.value = "";
  };

  handleSubmitDetail = (event) => {
    event.preventDefault();
    const { onCreate } = this.props;
    onCreate({
      // details: {
        detId: uuid.v4(),
        detValue: this.inputDetail.current.value,
        link: this.inputDetailLink.current.value,
        linkLabel: this.inputDetailLinkLabel.current.value,
      // },
    });
    this.inputDetail.current.value = "";
  };

  render() {
    const { onClose, isOpen, main, secondary } = this.props;
    return (
      isOpen &&
      ReactDOM.createPortal(
        <>
          {main && (
            <ModalStyled>
              <ModalWrapperStyled>
                <FormSimpleItem
                  onSubmit={this.handleSubmitSimpleItem}
                  refName={this.inputValue}
                  refDescript={this.inputDescription}
                  refLink={this.inputLink}
                  refLinkLabel={this.inputLinkLabel}
                />
                <FormComplexItem
                  onSubmit={this.handleSubmitComplexItem}
                  refName={this.inputDetValue}
                  refDescript={this.inputDetDescription}
                />
                <ModalIconStyled isCloseIcon callback={onClose} />
              </ModalWrapperStyled>
            </ModalStyled>
          )}
          {secondary && (
            <ModalStyled>
              <ModalWrapperStyled>
                <FormItemDetail
                  onSubmit={this.handleSubmitDetail}
                  refName={this.inputDetail}
                  refLink={this.inputDetailLink}
                  refLinkLabel={this.inputDetailLinkLabel}
                />
                <ModalIconStyled isCloseIcon callback={onClose} />
              </ModalWrapperStyled>
            </ModalStyled>
          )}
        </>,
        modalRoot
      )
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
