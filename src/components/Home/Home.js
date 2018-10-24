import React from "react";
import "./Home.css";
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
          <Col md={{ size: "auto", offset: 1 }}>
            <h1 className="display-3" className="rust">
              Path of Mindful Activity:
            </h1>
          </Col>
        </Row>

        <Row>
          <Col md={{ size: "auto", offset: 1 }}>
            <h2>
              The <span className="yellow">nitty-gritty</span> of compassion in
              action
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: "auto", offset: 1 }}>
            <Card>
              <h2>Approaching it</h2>
              <Player />
            </Card>
          </Col>
          <Col sm={{ size: "auto", offset: 1 }}>
            <Card>
              <h2>Test driving it</h2>
              <Player />
            </Card>
          </Col>
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
