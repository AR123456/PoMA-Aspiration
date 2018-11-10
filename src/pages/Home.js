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
      <h1 style={{ color: "#F07407" }}>Path of Mindful Activity:</h1>
      <br />
      <h2>
        The <a style={{ color: "#f0d907" }}>nitty-gritty</a> of wisdom &
        compassion in action
      </h2>
      <br />
      <Container>
        <Row />
        <Row>
          <Col size="md-6">
            <h2>Approaching it</h2>
            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/62Gzbd4qu5E"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="#"
            />
          </Col>
          <Col size="md-6">
            <h2>Test driving it</h2>

            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/u-oPJYE9v5o"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="#"
            />
          </Col>
        </Row>

        <br />
        <Link to="/pandr" className="nav-link" style={{ float: "right" }}>
          <Button
            bsStyle="primary"
            //   bsSize="med
            // "
          >
            Go on{" "}
          </Button>
        </Link>
      </Container>
    </Aura>
  </div>
);

export default Home;
