import React from "react";
import PropTypes from "prop-types";
import { IconStyled, IconInnerStyled } from "./Icon.styled";

const Icon = ({
  className,
  isAddIcon,
  isRemoveIcon,
  isAddMainIcon,
  callback
}) => {
  return (
    <IconStyled
      className={className}
      isAddIcon={isAddIcon}
      isRemoveIcon={isRemoveIcon}
      isAddMainIcon={isAddMainIcon}
      onClick={callback}
    >
      <IconInnerStyled>
        {isAddIcon || isAddMainIcon ? `\u002B` : `\u2212`}
      </IconInnerStyled>
    </IconStyled>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  isAddIcon: PropTypes.bool,
  isRemoveIcon: PropTypes.bool,
  isAddMainIcon: PropTypes.bool,
  callback: PropTypes.func
};

export default Icon;
