import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav``;

export const List = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  display: flex;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;

export const Text = styled.span`
  color: white;
`;
