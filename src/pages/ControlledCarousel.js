import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Hero from "../components/Hero";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

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
                animationIn="fadeInLeft"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>Relax....</h1>
                </div>
              </Animated>
              <Animated
                animationIn="fadeInRight"
                animationInDelay="1000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>…From head to toes or</h1>
                </div>
              </Animated>
              <Animated
                animationIn="fadeInRight"
                animationInDelay="2000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>…Starting with open hands or</h1>
                </div>
              </Animated>
              <Animated
                animationIn="fadeInRight"
                animationInDelay="3000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1> …Starting with the breath</h1>
                </div>
              </Animated>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Hero backgroundImage="./images/flag-splash.jpg" />
            <Carousel.Caption>
              <Animated
                animationIn="fadeInLeft"
                animationInDelay="1000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>Choose with your heart</h1>
                </div>
              </Animated>
              <Animated
                animationIn="fadeInRight"
                animationInDelay="2000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>On the next few screens, images appear.</h1>
                </div>
              </Animated>
              <Animated
                animationIn="fadeInRight"
                animationInDelay="3000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>
                    Look at each, find one you feel drawn to or that sparks
                    curiosity
                  </h1>
                </div>
              </Animated>
              <Animated
                animationIn="fadeInRight"
                animationInDelay="4000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>No need to overthink it, go with your gut.</h1>
                </div>
              </Animated>
              <Animated
                animationIn="fadeInRight"
                animationInDelay="5000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>When you have decided click on the Aspiration button</h1>
                </div>
              </Animated>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Hero backgroundImage="./images/ball.jpg" />

            <Carousel.Caption>
              <h1>3</h1>
              <Link to="/inst" className="nav-link">
                <button>Aspiration</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Hero backgroundImage="./images/beach.jpg" />

            <Carousel.Caption>
              <h1>4</h1>
              <Link to="/inst" className="nav-link">
                <button>Aspiration</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Hero backgroundImage="./images/bird.jpg" />

            <Carousel.Caption>
              <h1>5</h1>
              <Link to="/inst" className="nav-link">
                <button>Aspiration</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Hero backgroundImage="./images/deer.jpg" />

            <Carousel.Caption>
              <h1>6</h1>
              <Link to="/inst" className="nav-link">
                <button>Aspiration</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Hero backgroundImage="./images/elephant.jpg" />

            <Carousel.Caption>
              <h1>7</h1>
              <Link to="/inst" className="nav-link">
                <button>Aspiration</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Hero backgroundImage="./images/flower.jpg" />

            <Carousel.Caption>
              <h1>8</h1>
              <Link to="/inst" className="nav-link">
                <button>Aspiration</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

// render(<ControlledCarousel />);
export default ControlledCarousel;
