import React from "react";
import PropTypes from "prop-types";
import { IconStyled, IconInnerStyled } from "./Icon.styled";

const Icon = ({
  className,
  isAddIcon,
  isRemoveIcon,
  isAddMainIcon,
  isCloseIcon,
  callback
}) => {
  return (
    <IconStyled
      className={className}
      isAddIcon={isAddIcon}
      isRemoveIcon={isRemoveIcon}
      isAddMainIcon={isAddMainIcon}
      isCloseIcon={isCloseIcon}
      onClick={callback}
    >
      <IconInnerStyled>
        {isRemoveIcon ? `\u2212` : isCloseIcon ? `\u00D7` : `\u002B`}
      </IconInnerStyled>
    </IconStyled>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  isAddIcon: PropTypes.bool,
  isRemoveIcon: PropTypes.bool,
  isAddMainIcon: PropTypes.bool,
  isCloseIcon: PropTypes.bool,
  callback: PropTypes.func
};

export default Icon;
