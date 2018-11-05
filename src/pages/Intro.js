import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import Aura from "../components/Aura";
import { Animated } from "react-animated-css";

import ImagePage from "./ImagePage";

import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSeven from "./PageSeven";
import PageEight from "./PageEight";

class Intro extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <Aura backgroundImage="./images/czerwinski.jpg" />
            <Carousel.Caption>
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div style={{ paddingBottom: 400 }}>
                  <h1 style={{ fontSize: 60 }}>Pause and Relax.... </h1>
                </div>
              </Animated>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Aura backgroundImage="images/burden.jpg">
              <PageFour />
            </Aura>
          </Carousel.Item>
          <Carousel.Item>
            <Aura backgroundImage="./images/seaman.jpg">
              <PageFive />
            </Aura>
          </Carousel.Item>
          <Carousel.Item>
            <Aura>
              <ImagePage />
            </Aura>
          </Carousel.Item>
          <Carousel.Item>
            <Aura backgroundImage="./images/seymour.jpg">
              <PageSeven />
            </Aura>
          </Carousel.Item>
          <Carousel.Item>
            <Aura backgroundImage="#">
              <PageEight />
            </Aura>
            {/* <Carousel.Caption style={{ color: "black", paddingBottom: 100 }}>
              <Animated
                animationIn="fadeIn"
                animationInDelay="1000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <br />
                <ImageCard />
                <h2 style={{ textAlign: "left" }}>
                  Jot down a few words to capture connections between the image
                  and your aspiration for change. If no thoughts come, just
                  relax and rest your eyes on the image.Thoughts may come later,
                  or tomorrow.
                </h2>
              </Animated>
              <Animated
                animationIn="fadeIn"
                animationInDelay="1000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div />
                <div />
                <br />
                <Link to="/form" className="nav-link">
                  <Button bsStyle="primary" bsSize="large">
                    Go On
                  </Button>
                </Link>
              </Animated>
            </Carousel.Caption> */}
          </Carousel.Item>
          {/* <Carousel.Item>
            <Form />
            
          </Carousel.Item> */}
        </Carousel>
      </div>
    );
  }
}

export default Intro;
