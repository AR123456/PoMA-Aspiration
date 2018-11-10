import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Button, Navbar } from "react-bootstrap";

const NavBar = () => (
  <Navbar>
    <Link to="/" className="nav-link">
      <h3>
        <Button bsStyle="primary">Start Over</Button>
      </h3>
    </Link>
  </Navbar>
);
export default NavBar;
