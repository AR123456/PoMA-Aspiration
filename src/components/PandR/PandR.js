import React from "react";
import "./PandR.css";
import ReactPlayer from "react-player";
import { Jumbotron, Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import Player from "../Player";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div>
      <Container>
        <Row>
          {/* <Col md={{ size: "auto", offset: 1 }}>
            <h1 className="display-3" className="rust">
              Pause and Relax
            </h1>
          </Col> */}
        </Row>

        <Row className="center">
          <Col md={{ size: "auto", offset: 0 }}>
            <span className="rust">Pause </span>
            and
            <span className="yellow"> Relax...</span>
          </Col>
        </Row>

        <Row>
          {/* <Col md={{ size: "auto", offset: 1 }}>
            <Card>
              <h2>Approaching it</h2>
            </Card>
          </Col>
          <Col sm={{ size: "auto", offset: 1 }}>
            <Card>
              <h2>Test driving it</h2>
            </Card>
          </Col> */}
        </Row>
        <br />

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
    </div>
  );
};

export default Home;
