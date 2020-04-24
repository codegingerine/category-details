import React from "react";
import PropTypes from "prop-types";
import ModalFormWrapper from "./../ModalFormWrapper";
import ModalInput from "./../ModalInput";

const FormItemDetail = ({ onSubmit, refName, refLink, refLinkLabel }) => {
  return (
    <ModalFormWrapper
      onSubmit={onSubmit}
      title="Create a detail"
      buttonSubmitText="Add complex item"
    >
      <ModalInput placeholder="Fill in the detail name" ref={refName} />
      <ModalInput placeholder="Fill in link url" ref={refLink} />
      <ModalInput placeholder="Fill in link label" ref={refLinkLabel} />
    </ModalFormWrapper>
  );
};

FormItemDetail.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  refName: PropTypes.object.isRequired,
  refLink: PropTypes.object.isRequired,
  refLinkLabel: PropTypes.object.isRequired,
};

export default FormItemDetail;
