import React from "react";
import PropTypes from "prop-types";
import { ModalInputStyled } from "./ModalInput.styled";

const ModalInput = React.forwardRef(({ placeholder, maxLength, ...rest }, ref) => (
  <ModalInputStyled
    placeholder={placeholder}
    maxLength={maxLength}
    ref={ref}
    required
    {...rest}
  />
));

ModalInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

ModalInput.defaultProps = {
  maxLength: 30,
};

export default ModalInput;
