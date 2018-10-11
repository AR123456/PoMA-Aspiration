import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Link } from "react-router-dom";
const Inst = () => (
  <div>
    <Hero backgroundImage="./images/flag-splash.jpg">
      <h1>.</h1>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h2>
              What connections are there with a change I’d like to make in the
              direction of…. ….greater compassion… …being kinder… …increased
              patience… …more generosity… …towards self, towards others, or
              both?
            </h2>
            <h2>
              Jot down a few words to capture connections between the image and
              your aspiration for change. If no thoughts come, just relax and
              rest your eyes on the image. Thoughts may come later, or tomorrow.
            </h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            {/* <h2>
              ….greater compassion… …being kinder… …increased patience… …more
              generosity…
            </h2> */}
          </Col>
          <Col size="md-6">
            {/* <h2>…towards self, towards others, or both?</h2> */}
          </Col>
        </Row>
        <Link to="/form" className="nav-link">
          <button>Go on</button>
        </Link>
      </Container>
    </Hero>
  </div>
);
export default Inst;
