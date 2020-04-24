import React from "react";
import PropTypes from "prop-types";
import ModalFormWrapper from "./../ModalFormWrapper";
import ModalInput from "./../ModalInput";

const FormComplexItem = ({ onSubmit, refName, refDescript }) => {
  return (
    <ModalFormWrapper
      onSubmit={onSubmit}
      title="Create a complex item"
      buttonSubmitText="Add complex item"
    >
      <ModalInput placeholder="Fill in item name" ref={refName} />
      <ModalInput placeholder="Fill in item description" ref={refDescript} />
    </ModalFormWrapper>
  );
};

FormComplexItem.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  refName: PropTypes.object.isRequired,
  refDescript: PropTypes.object.isRequired,
};

export default FormComplexItem;
