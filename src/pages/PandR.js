import React from "react";
import Aura from "../components/Aura";
import Container from "../components/Container";
import { Button } from "react-bootstrap";
import Row from "../components/Row";

import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <br />
    <Aura backgroundImage="./images/rpgreen.jpg">
      {/* <h1>Path of Mindful Activity:</h1>
      <br />
      <h2>The nitty-gritty of wisdom & compassion in action</h2>
      <br /> */}
      <Container>
        <Row />
        <Row>
          <div style={{ paddingBottom: 400, marginTop: 300 }}>
            <h1 style={{ fontSize: 60 }}>
              <a className="image rust">Pause</a> and{" "}
              <a style={{ color: "#f0d907" }}>Relax....</a>{" "}
            </h1>
          </div>
        </Row>
        <br />
        <Link to="/relax" className="nav-link" style={{ float: "right" }}>
          <Button bsStyle="primary">Go on </Button>
        </Link>
      </Container>
    </Aura>
  </div>
);

export default Home;
