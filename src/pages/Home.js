import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import { Button } from "react-bootstrap";
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

            <iframe src="./images/rain.mp4" title="#" />
          </Col>
          <Col size="md-6">
            <h2>
              Test driving it
              {/* [Video still & 2 minute video clip of someone
              describing their own use of the practice described in the flowing */}
              {/* slides.] */}
            </h2>
            <iframe src="./images/snow.mp4" title="#">
              {" "}
            </iframe>
          </Col>
        </Row>
        <Button
          className={
            window.location.pathname === "/intro"
              ? "nav-item active"
              : "nav-item"
          }
          bsStyle="default"
          bsSize="large"
        >
          <Link to="/intro" className="nav-link">
            {" "}
            Next
          </Link>
        </Button>
      </Container>
    </Hero>
  </div>
);

export default Home;
