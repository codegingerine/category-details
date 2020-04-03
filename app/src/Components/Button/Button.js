import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled, ButtonInnerStyled } from "./Button.styled";

const Button = ({ className, buttonText, onClick }) => {
  return (
    <ButtonStyled className={className} onClick={onClick}>
      <ButtonInnerStyled>{buttonText}</ButtonInnerStyled>
    </ButtonStyled>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
