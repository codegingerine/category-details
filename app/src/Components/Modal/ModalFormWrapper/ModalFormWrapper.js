import React from "react";
import PropTypes from "prop-types";
import {
  ModalFormStyled,
  ModalTitleStyled,
  ModalButtonStyled,
} from "./ModalFormWrapper.styled";

const ModalFormWrapper = ({ onSubmit, children, title, buttonSubmitText }) => {
  return (
    <ModalFormStyled onSubmit={onSubmit}>
      <ModalTitleStyled>{title}</ModalTitleStyled>
      {children}
      <ModalButtonStyled type="submit" buttonText={buttonSubmitText} />
    </ModalFormStyled>
  );
};

ModalFormWrapper.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  buttonSubmitText: PropTypes.string,
};

ModalFormWrapper.defaultProps = {
  buttonSubmitText: "Add item",
};

export default ModalFormWrapper;
