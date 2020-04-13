import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled, ButtonInnerStyled } from "./Button.styled";

const Button = ({ className, buttonText, onClick, type, children, href }) => (
  <>
    {href ? (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <ButtonStyled className={className} onClick={onClick} type={type}>
        <ButtonInnerStyled>{buttonText}</ButtonInnerStyled>
      </ButtonStyled>
    )}
  </>
);

Button.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.any, 
  href: PropTypes.string
};

export default Button;
