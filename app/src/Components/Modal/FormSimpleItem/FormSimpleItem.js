import React from "react";
import PropTypes from "prop-types";
import ModalFormWrapper from "./../ModalFormWrapper";
import ModalInput from "./../ModalInput";

const FormSimpleItem = ({
  onSubmit,
  refName,
  refDescript,
  refLink,
  refLinkLabel,
}) => {
  return (
    <ModalFormWrapper
      onSubmit={onSubmit}
      title="Create a simple item"
      buttonSubmitText="Add simple item"
    >
      <ModalInput placeholder="Fill in item name" ref={refName} />
      <ModalInput placeholder="Fill in item description" ref={refDescript} />
      <ModalInput placeholder="Fill in link url" ref={refLink} />
      <ModalInput placeholder="Fill in link label" ref={refLinkLabel} />
    </ModalFormWrapper>
  );
};

FormSimpleItem.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  refName: PropTypes.object.isRequired,
  refDescript: PropTypes.object.isRequired,
  refLink: PropTypes.object.isRequired,
  refLinkLabel: PropTypes.object.isRequired,
};

export default FormSimpleItem;
