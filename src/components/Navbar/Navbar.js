import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Path of Mindful Activity
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li
          className={
            window.location.pathname === "/intro"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/intro" className="nav-link">
            Intro
          </Link>
        </li>
        {/* <li
          className={
            window.location.pathname === "/chosen"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/chosen" className="nav-link">
            Chosen
          </Link>
        </li> */}
        <li
          className={
            window.location.pathname === "/inst"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/inst" className="nav-link">
            Instruction
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/form"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/form" className="nav-link">
            Form
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/imagepage"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/imagepage" className="nav-link">
            Images
          </Link>
        </li>

        {/* <li
          className={
            window.location.pathname === "/inst"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/inst" className="nav-link">
            Instructions
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/form"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/form" className="nav-link">
            Form
          </Link>
        </li> */}
      </ul>
    </div>
  </nav>
);

export default Navbar;
