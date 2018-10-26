import React, { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

// import ".ControlledCarousel.css";

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
            <Hero backgroundImage="./images/fusco.jpg" />
            <Carousel.Caption>
              <Animated
                animationIn="fadeInRight"
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
            <Hero backgroundImage="./images/fusco.jpg" />
            <Carousel.Caption style={{ paddingBottom: 300 }}>
              <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>
                    <img src="../images/hands.jpg" alt="hands" hspace="20" />
                    <span
                      className="image"
                      className="rust"
                      style={{ fontSize: 60 }}
                    >
                      Relax...
                    </span>
                  </h1>
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
            <Hero backgroundImage="./images/fusco.jpg" />
            <Carousel.Caption style={{ paddingBottom: 200 }}>
              <Animated
                animationIn="fadeInLeft"
                animationInDelay="1000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>
                    <img src="../images/heart.jpg" alt="hands" hspace="20" />
                    <span className="image" style={{ fontSize: 50 }}>
                      Choose with your heart
                    </span>
                  </h1>
                </div>
              </Animated>
              <Animated
                animationIn="fadeIn"
                animationInDelay="2000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>On the next screen, images appear.</h1>
                  <h1>
                    Look at each, then click the <b>one</b>:
                  </h1>
                </div>
              </Animated>
              <Animated
                animationIn="fadeIn"
                animationInDelay="3000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>you feel drawn to</h1>
                  <h1> or </h1>
                  <h1> that sparks curiosity</h1>
                  <br />
                  <h1>No need to overthink it, go with your gut.</h1>
                </div>
              </Animated>

              <Animated
                animationIn="fadeIn"
                animationInDelay="5000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <Link to="/images" className="nav-link">
                  <button>See Images </button>
                </Link>
              </Animated>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <Hero backgroundImage="./images/ball.jpg" />
            <Carousel.Caption>
              <h1>3</h1>
              <Link to="/inst" className="nav-link">
                <button>Aspiration</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item> */}

          {/* <Carousel.Item>
            <Hero>
              <Link to="/form" className="nav-link" />
            </Hero>
            <Carousel.Caption>
              <h1>4</h1>
              <Link to="/inst" className="nav-link">
                <button>Aspiration</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item> */}

          {/* <Carousel.Item>
            <Hero backgroundImage="./images/bird.jpg" />

            <Carousel.Caption>
              <h1>5</h1>
              <Link to="/inst" className="nav-link">
                <button>Aspiration</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item> */}

          {/* <Carousel.Item>
            <Hero backgroundImage="./images/deer.jpg" />

            <Carousel.Caption>
              <h1>6</h1>
              <Link to="/inst" className="nav-link">
                <button>Aspiration</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item> */}

          {/* <Carousel.Item>
            <Hero backgroundImage="./images/elephant.jpg" />

            <Carousel.Caption>
              <h1>7</h1>
              <Link to="/inst" className="nav-link">
                <button>Aspiration</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item> */}

          {/* <Carousel.Item>
            <Hero backgroundImage="./images/flower.jpg" />

            <Carousel.Caption>
              <h1>8</h1>
              <Link to="/inst" className="nav-link">
                <button>Aspiration</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </div>
    );
  }
}

// render(<ControlledCarousel />);
export default ControlledCarousel;
