import React from "react";
import PropTypes from "prop-types";
import { ListTitleStyled } from "./ListTitle.styled";

const ListTitle = ({ title }) => {
  return (
  <ListTitleStyled>{title}</ListTitleStyled>
  );
};

ListTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ListTitle;
