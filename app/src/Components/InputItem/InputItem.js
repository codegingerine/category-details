import React from "react";
import {
  ListInputWrapperStyled,
  ListInputStyled,
  ListIconStyled
} from "./InputItem.styled";

const InputItem = React.forwardRef(
  ({ className, value, placeholder, onDelete, readOnly }, ref) => {
    return (
      <ListInputWrapperStyled className={className}>
        <ListInputStyled
          type="text"
          placeholder={placeholder}
          value={value}
          ref={ref}
          readOnly={readOnly}
        />
        {onDelete && <ListIconStyled isRemoveIcon callback={onDelete} />}
      </ListInputWrapperStyled>
    );
  }
);

export default InputItem;
