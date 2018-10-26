import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <Hero backgroundImage="./images/fusco.jpg">
      <h1>Path of Mindful Activity:</h1>
      <h2>The nitty-gritty of compassion in action</h2>
      <Container>
        <Row />
        <Row>
          <Col size="md-6">
            <h2>
              Approaching it
              {/* [Video still & 2 minute video clip of, e.g., MDMP
              explaining the practice described in the following slides] */}
            </h2>

            <iframe src="./images/rain.mp4" />
          </Col>
          <Col size="md-6">
            <h2>
              Test driving it
              {/* [Video still & 2 minute video clip of someone
              describing their own use of the practice described in the flowing */}
              {/* slides.] */}
            </h2>
            <iframe src="./images/snow.mp4"> </iframe>
          </Col>
        </Row>
        <button
          className={
            window.location.pathname === "/controlledcarousel"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/controlledcarousel" className="nav-link">
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
    </Hero>
  </div>
);

export default Home;
