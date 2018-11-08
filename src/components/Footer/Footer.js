import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <Link to="/" className="nav-link">
      <h3 align="right">
        <Button bsStyle="primary" bsSize="large">
          Start Over
        </Button>
      </h3>
    </Link>
  </footer>
);

export default Footer;
