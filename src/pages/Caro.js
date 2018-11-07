import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Aura from "../components/Aura";
import { Animated } from "react-animated-css";

import ImagePage from "./ImagePage";

import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSeven from "./PageSeven";
import PageEight from "./PageEight";
import Form from "./Form";

class Caro extends Component {
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
              {/* relax */}
              <PageFour />
            </Aura>
          </Carousel.Item>
          <Carousel.Item>
            <Aura backgroundImage="./images/umanoide.jpg">
              {/* choose with heart  */}
              <PageFive />
            </Aura>
          </Carousel.Item>
          <Carousel.Item>
            <Aura>
              <ImagePage />
            </Aura>
          </Carousel.Item>
          <Carousel.Item>
            <Aura backgroundImage="./images/rawpixel.jpg">
              {/* image chosen will be on next page  */}
              <PageSeven />
            </Aura>
          </Carousel.Item>
          <Carousel.Item>
            <Aura backgroundImage="#">
              {/* jod down a few words  */}
              <PageEight />
            </Aura>
          </Carousel.Item>
          {/* <Carousel.Item>
            <Form />
          </Carousel.Item> */}
        </Carousel>
      </div>
    );
  }
}

export default Caro;
