import { NavLink } from "react-router-dom";

import {
  NavContainer,
  NavBrand,
  NavLinkList,
  NavLinkItem,
} from "./styles/Nav.styled";

const Navbar = () => {
  return (
    <NavContainer>
      <NavBrand src="./logo.png" />
      <NavLinkList>
        <NavLinkItem>
          <NavLink to={"/"}>HOME</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to={"/app"}>APP</NavLink>
        </NavLinkItem>
      </NavLinkList>
    </NavContainer>
  );
};

export default Navbar;
