import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Container from "../components/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aura from "../components/Aura";

const Choose = () => (
  <Aura backgroundColor="rgb(235, 235, 252)">
    <br />
    <Grid>
      <Container className="border">
        <Row>
          <Col xsOffset={1}>
            <div>
              <h1>
                <img src="../images/hearts.jpg" alt="heart" hspace="20" />
                <span className="image" style={{ fontSize: 50 }}>
                  Choose with your heart
                </span>
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="show-grid">
          <Col sm={6} xsOffset={0}>
            <h2>On the next screen, images appear.</h2>
            <h2>
              Look at each, then click the <b>one</b>:
            </h2>
          </Col>
        </Row>
        <Row>
          <Col sm={6} xsOffset={4}>
            <h2 style={{ color: "#f15d22", textShadow: "-.5px -.5px 0 #000" }}>
              you feel drawn to
            </h2>
            <h2> or </h2>
            <h2
              style={{
                color: "rgba(255, 255, 2, 1)",
                textShadow: "-.5px -.5px 0 #000"
              }}
            >
              {" "}
              that sparks curiosity
            </h2>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col sm={6} xsOffset={0}>
            <h2>No need to overthink it, go with your gut.</h2>
          </Col>
        </Row>
      </Container>
    </Grid>
    <Link to="/imagepage" className="nav-link">
      <Button
        bsStyle="primary"
        // bsSize="med"
        style={{ float: "right", marginRight: 200 }}
      >
        Go On{" "}
      </Button>
    </Link>
  </Aura>
);
export default Choose;
