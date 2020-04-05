import React from "react";
import PropTypes from "prop-types";
import { ListInputStyled } from "./Input.styled";

const Input = React.forwardRef(
  ({ className, placeholder, value, readOnly }, ref) => {
    return (
      <ListInputStyled
        className={className}
        type="text"
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        ref={ref}
      />
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool
};

export default Input;
