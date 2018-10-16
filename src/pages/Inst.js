import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
const Inst = () => (
  <div>
    <Hero backgroundImage="./images/flag-splash.jpg">
      <Container style={{ marginTop: 30 }}>
        <Row>
          <h2>
            <Col size="md-12">
              <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOut"
                isVisible={true}
              >
                <p>
                  What connections are there with a change I’d like to make in
                  the direction of….
                </p>
              </Animated>
              <Animated
                animationIn="fadeInRight"
                animationInDelay="1000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <p>….greater compassion…</p>
              </Animated>
              <Animated
                animationIn="fadeInRight"
                animationInDelay="2000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <p> …being kinder…</p>
              </Animated>
              <Animated
                animationIn="fadeInRight"
                animationInDelay="3000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <p> …increased patience…</p>
              </Animated>
              <Animated
                animationIn="fadeInRight"
                animationInDelay="4000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <p> …more generosity… </p>
              </Animated>
              <Animated
                animationIn="fadeInRight"
                animationInDelay="5000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <p>…towards self, towards others, or both?</p>
              </Animated>
              <Animated
                animationIn="fadeInLeft"
                animationInDelay="6000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <h2>On the next screen click on your chosen image.</h2>
              </Animated>
              <Animated
                animationIn="fadeInUp"
                animationInDelay="9000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <h2>
                  Jot down a few words to capture connections between the image
                  and your aspiration for change. If no thoughts come, just
                  relax and rest your eyes on the image. Thoughts may come
                  later, or tomorrow.
                </h2>
              </Animated>
            </Col>
          </h2>
        </Row>
        <Row>
          <Col size="md-6">
            {/* <h2>
              ….greater compassion… …being kinder… …increased patience… …more
              generosity…
            </h2> */}
          </Col>
          <Col size="md-6">
            {/* <h2>…towards self, towards others, or both?</h2> */}
          </Col>
        </Row>
        <Animated
          animationIn="fadeInUp"
          animationInDelay="12000"
          animationOut="fadeOut"
          isVisible={true}
        >
          <Link to="/form" className="nav-link">
            <button>Choose Image</button>
          </Link>
        </Animated>
      </Container>
    </Hero>
  </div>
);
export default Inst;
