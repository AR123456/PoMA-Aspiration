import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";

const NavBar = () => (
  <Navbar>
    <Link to="/" className="nav-link">
      <h3>
        <Button bsStyle="primary" bsSize="large">
          Start Over
        </Button>
      </h3>
    </Link>
  </Navbar>
);
export default NavBar;
