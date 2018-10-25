import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";

class Relax extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: "auto", offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: "auto", offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        </Row>
      </Container>
    );
  }
}
export default Relax;
