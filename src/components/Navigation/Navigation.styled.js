import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavList = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
`
export const StyledListItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 32px;
  text-decoration: none;
  color: black;

  &.active {
    color: orangered;
  }

  &:first-child {
    margin-right: 10px;
    margin-left: 10px;
  }
`;