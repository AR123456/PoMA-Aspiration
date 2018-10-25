import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavBar = props => (
  <div>
    <Link className="navbar-brand" to="/">
      Path of Mindful Activity
    </Link>
    <Nav>
      <NavItem
        className={
          window.location.pathname === "/" ||
          window.location.pathname === "/home"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/home" className="nav-link">
          Home
        </Link>
      </NavItem>

      <NavItem
        className={
          window.location.pathname === "/caro" ? "nav-item active" : "nav-item"
        }
      >
        <Link to="/caro" className="nav-link">
          Caro
        </Link>
      </NavItem>

      <NavItem
        className={
          window.location.pathname === "/relax" ? "nav-item active" : "nav-item"
        }
      >
        <Link to="/relax" className="nav-link">
          Relax
        </Link>
      </NavItem>

      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  </div>
);

export default NavBar;
