import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 81px;
  height: 79px;
  border-radius: 7px;
  background: linear-gradient(0deg, #7176f7 0%, #ca75f1 100%);
  box-shadow: 0 7px 19px 0 rgba(125, 118, 246, 0.31);
  margin: 5px 0;

  &:not(:last-of-type) {
    margin-right: 25px;
  }
`;

export const NavLinkRouterStyled = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  transition: background .5s ease;

  &.active {
    background: #ca75f1;
  }

  &:hover {
    background: #7176f7;
  }
`;

export const LabelStyled = styled.span`
  display: block;
  font-size: 44px;
  font-weight: 600;
  line-height: 1;
  color: #ffffff;
`;
