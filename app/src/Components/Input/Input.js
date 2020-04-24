import React from "react";
import PropTypes from "prop-types";
import { ListInputStyled } from "./Input.styled";

const Input = React.forwardRef(
  ({ className, placeholder, value, readOnly, required, maxLength }, ref) => {
    return (
      <ListInputStyled
        className={className}
        type="text"
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        required={required}
        ref={ref}
        maxLength={maxLength}
      />
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
};

export default Input;
