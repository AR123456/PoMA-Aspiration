import React from "react";
import Aura from "../components/Aura";
import Container from "../components/Container";
import { Button } from "react-bootstrap";
import Row from "../components/Row";

import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <br />
    <Aura backgroundColor="#ffffff">
      <Container>
        <Row>
          <div style={{ paddingBottom: 400, marginTop: 300 }}>
            <h1 style={{ fontSize: 60 }}>
              <a style={{ color: "#f15d22" }}>Pause</a> and{" "}
              <a
                style={{
                  color: " #FDD528"
                }}
              >
                Relax....
              </a>{" "}
            </h1>

            <Link to="/relax" className="nav-link" style={{ float: "right" }}>
              <Button bsStyle="primary">Go on </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </Aura>
  </div>
);

export default Home;
