import React from "react";
import PropTypes from "prop-types";
import {
  SectionStyled,
  SectionTiteStyled,
  SectionWrapperStyled,
} from "./SectionWrapper.styled";

const Section = ({title, children }) => {
  return (
    <SectionStyled>
      <SectionTiteStyled>{title}</SectionTiteStyled>
      <SectionWrapperStyled>
        {children && children}
      </SectionWrapperStyled>
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Section;
