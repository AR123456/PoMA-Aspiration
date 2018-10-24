import React from "react";

import { Container, Jumbotron, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <Jumbotron backgroundImage="./images/marble.jpg">
      <h1>Path of Mindful Activity:</h1>
      <h2>The nitty-gritty of compassion in action</h2>
      <Container>
        <Row />
        <Row>
          <Col size="md-6">
            <h2>Approaching it</h2>

            <iframe src="./images/rain.mp4" />
          </Col>
          <Col size="md-6">
            <h2>Test driving it</h2>
            <iframe src="./images/snow.mp4"> </iframe>
          </Col>
        </Row>
        <button
          className={
            window.location.pathname === "/caro"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/caro" className="nav-link">
            {" "}
            Next
          </Link>
        </button>
        {/* <button
          className={
            window.location.pathname === "/relax"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/relax" className="nav-link">
            Next
          </Link>
        </button> */}
      </Container>
    </Jumbotron>
  </div>
);

export default Home;
