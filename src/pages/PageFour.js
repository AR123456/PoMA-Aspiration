import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";

const PageFour = () => (
  <Wrapper>
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
    ;
  </Wrapper>
);
export default PageFour;
