import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Home = () => (
  <div>
    <Hero backgroundImage="./images/flag-splash.jpg">
      <h1>Path of Mindful Activity:</h1>
      <h2>The nitty-gritty of compassion in action</h2>
      <Container style={{ marginTop: 30 }}>
        <Row>
          {/* <Col size="md-12">
            <h1>Welcome!</h1>
          </Col> */}
        </Row>
        <Row>
          <Col size="md-6">
            <p>
              Approaching it [Video still & 2 minute video clip of, e.g., MDMP
              explaining the practice described in the following slides]
            </p>
          </Col>
          <Col size="md-6">
            <p>
              Test driving it [Video still & 2 minute video clip of someone
              describing their own use of the practice described in the flowing
              slides.]
            </p>
          </Col>
        </Row>
      </Container>
    </Hero>
  </div>
);

export default Home;
