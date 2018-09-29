import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Relax = () => (
  <div>
    <Hero backgroundImage="./images/flag-splash.jpg">
      <h1>Pause and Relax.... </h1>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p>
            on click to go to Carousel or remove this space and putt the button
            on the image{" "}
          </p>
        </Col>
        <Col size="md-6">
          <p>on click to go to Carousel</p>
        </Col>
      </Row>
    </Container>
  </div>
);
export default Relax;
