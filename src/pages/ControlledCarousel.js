import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Hero from "../components/Hero";
import { Animated } from "react-animated-css";

class ControlledCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    // alert(`selected=${selectedIndex}, direction=${e.direction}`);
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
            <Hero backgroundImage="./images/flag-splash.jpg" />
            <Carousel.Caption>
              <Animated
                animationIn="bounceInLeft"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h3>Relax....</h3>
                </div>
              </Animated>
              <Animated
                animationIn="bounceInRight"
                animationInDelay="1000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <p>…From head to toes or</p>
                </div>
              </Animated>
              <Animated
                animationIn="bounceInRight"
                animationInDelay="2000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <p>…Starting with open hands or</p>
                </div>
              </Animated>
              <Animated
                animationIn="bounceInRight"
                animationInDelay="3000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <p> …Starting with the breath</p>
                </div>
              </Animated>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Hero backgroundImage="./images/flag-splash.jpg" />
            <Carousel.Caption>
              <Animated
                animationIn="bounceInLeft"
                animationInDelay="1000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h3>Choose with your heart</h3>
                </div>
              </Animated>
              <Animated
                animationIn="bounceInRight"
                animationInDelay="3000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <p>
                    On the next few screens, appear. Look at each, then click
                    the one: you feel drawn to or that sparks curiosity No need
                    to overthink it, go with your gut.
                  </p>
                </div>
              </Animated>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Hero backgroundImage="./images/ball.jpg" />

            <Carousel.Caption>
              <h3>3</h3>
              <p>onclick button to input form page</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Hero backgroundImage="./images/beach.jpg" />

            <Carousel.Caption>
              <h3>4</h3>
              <p>onclick button to input form page</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Hero backgroundImage="./images/bird.jpg" />

            <Carousel.Caption>
              <h3>5</h3>
              <p>onclick button to input form page</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Hero backgroundImage="./images/deer.jpg" />

            <Carousel.Caption>
              <h3>6</h3>
              <p>onclick button to input form page</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Hero backgroundImage="./images/elephant.jpg" />

            <Carousel.Caption>
              <h3>7</h3>
              <p>onclick button to input form page</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Hero backgroundImage="./images/flower.jpg" />

            <Carousel.Caption>
              <h3>8</h3>
              <p>onclick button to input form page</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

// render(<ControlledCarousel />);
export default ControlledCarousel;
