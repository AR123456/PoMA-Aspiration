import React from "react";
import Aura from "../components/Aura";
import Container from "../components/Container";
import { Button } from "react-bootstrap";
import Row from "../components/Row";
import Col from "../components/Col";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <br />
    <Aura backgroundImage="./images/umanoide.jpg">
      <h1>Path of Mindful Activity:</h1>
      <br />
      <h2>The nitty-gritty of compassion in action</h2>
      <br />
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
        <br />
        <Link to="/intro" className="nav-link">
          <Button bsStyle="primary" bsSize="large">
            Next{" "}
          </Button>
        </Link>
      </Container>
    </Aura>
  </div>
);

export default Home;
