import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aura from "../components/Aura";

const Relax = () => (
  <Aura backgroundImage="./images/umanoide.jpg">
    <Container>
      <Grid>
        <Row className="show-grid">
          <Col xsOffset={1}>
            <h1>
              {" "}
              <span className="image rust">
                <img src="../images/hands.jpg" alt="hands" />
                Relax...
              </span>
            </h1>
          </Col>
        </Row>

        <Container className="border">
          <h2>
            <Row className="show-grid">
              <Col sm={6} xsOffset={0}>
                …From head to toes <i>or</i>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={6} xsOffset={3}>
                …Starting with open hands <i>or</i>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col sm={6} xsOffset={6}>
                …Starting with the breath
              </Col>
            </Row>
          </h2>
        </Container>
      </Grid>
      <Link to="/choose" className="nav-link">
        <Button bsStyle="primary" bsSize="large">
          Next{" "}
        </Button>
      </Link>
    </Container>
  </Aura>
);
export default Relax;
