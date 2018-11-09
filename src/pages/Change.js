import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aura from "../components/Aura";

const Change = () => (
  <Aura backgroundImage="./images/umanoide.jpg">
    <Wrapper>
      <Grid>
        <Container className="border">
          <Row>
            <Col xsOffset={1} style={{ textAlign: "left" }}>
              <h2>
                The image you chose will be waiting for you on the next screen.
                As you look, <a style={{ color: "#F07407" }}>ask:</a>
              </h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <br />
          <Row>
            <Col xsOffset={1} style={{ textAlign: "left" }}>
              <h2>
                {" "}
                What connections are there with a change I’d like to make in the
                direction of….
              </h2>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xsOffset={0}>
              <h2 style={{ color: "#F07407", textAlign: "left" }}>
                ….greater compassion…
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={1}>
              <h2 style={{ color: "#f0d907", textAlign: "left" }}>
                {" "}
                …being kinder…
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={0}>
              <h2 style={{ color: "#F07407", textAlign: "left" }}>
                {" "}
                …increased patience…
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={1}>
              <h2 style={{ color: "#f0d907", textAlign: "left" }}>
                {" "}
                …more generosity…
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={6} style={{ textAlign: "left" }}>
              <h2>…towards self, towards others, or both?</h2>
            </Col>
          </Row>
        </Container>
      </Grid>
      <Link to="/jot" className="nav-link">
        <Button bsStyle="primary" bsSize="large">
          Next{" "}
        </Button>
      </Link>
    </Wrapper>
  </Aura>
);
export default Change;
