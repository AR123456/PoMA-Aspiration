import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Link } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";

const Home = () => (
  <div>
    <Hero backgroundImage="./images/flag-splash.jpg">
      <h1>Path of Mindful Activity:</h1>
      <h2>The nitty-gritty of compassion in action</h2>
      <Container style={{ marginTop: 30 }}>
        <Row />
        <Row>
          <Col size="md-6">
            <h2>
              Approaching it [Video still & 2 minute video clip of, e.g., MDMP
              explaining the practice described in the following slides]
            </h2>
            <VideoPlayer src="./images/rain.mp4" />
          </Col>
          <Col size="md-6">
            <h2>
              Test driving it [Video still & 2 minute video clip of someone
              describing their own use of the practice described in the flowing
              slides.]
            </h2>
          </Col>
          <VideoPlayer src="./images/snow.mp4" />
        </Row>
      </Container>
      <button
        className={
          window.location.pathname === "/relax" ? "nav-item active" : "nav-item"
        }
      >
        <Link to="/relax" className="nav-link">
          Next
        </Link>
      </button>
    </Hero>
  </div>
);

export default Home;