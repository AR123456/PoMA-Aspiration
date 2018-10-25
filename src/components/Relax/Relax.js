import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import "./Relax.css";
class Relax extends React.Component {
  render() {
    return (
      <Container>
        <Row className="center">
          <Col sm={{ size: "auto", offset: 1 }}>
            <span className="image">
              <img src="../images/hands.jpg" alt="hands" />
            </span>
            <span className="rust">Relax...</span>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: "auto", offset: 1 }}>…From head to toes or</Col>
        </Row>
        <Row>
          <Col sm={{ size: "auto", offset: 3 }}>
            {" "}
            …Starting with open hands or
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: "auto", offset: 5 }}> …Starting with the breath</Col>
        </Row>
        <Row>
          <Col
            sm={{
              size: "auto",
              offset: 8
            }}
          >
            <Button color="primary">Next</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Relax;
