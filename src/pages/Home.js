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
    <Aura backgroundColor="#ffffff">
      <h1 style={{ color: "#f15d22" }}>Path of Mindful Activity:</h1>
      <br />
      <h2>
        The{" "}
        <a
          style={{
            color: "#FDD528"
          }}
        >
          nitty-gritty
        </a>{" "}
        of wisdom & compassion in action
      </h2>
      <br />
      <Container>
        <Row>
          <Col size="md-6">
            <h2>Approaching it</h2>
            <iframe
              title="Approching"
              width="400"
              height="300"
              src="https://www.youtube.com/embed/qulqm3WDwC4?list=UUQqnLXLhmulg9RafT5ervlg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Col>
          <Col size="md-6">
            <h2>Test driving it</h2>
            <iframe
              title="Driving"
              width="400"
              height="300"
              src="https://www.youtube.com/embed/wcYomhd8yL4?list=UUQqnLXLhmulg9RafT5ervlg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
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
