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
      <h2>The nitty-gritty of wisdom & compassion in action</h2>
      <br />
      <Container>
        <Row />
        <Row>
          <div style={{ paddingBottom: 400 }}>
            <h1 style={{ fontSize: 60 }}>
              <a className="image rust">Pause</a> and{" "}
              <a style={{ color: "#f0d907" }}>Relax....</a>{" "}
            </h1>
          </div>
        </Row>
        <br />
        <Link to="/relax" className="nav-link">
          <Button bsStyle="primary" bsSize="large">
            Next{" "}
          </Button>
        </Link>
      </Container>
    </Aura>
  </div>
);

export default Home;
