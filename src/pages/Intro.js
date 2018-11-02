import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import Hero from "../components/Hero";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import ImagePage from "./ImagePage";
import ImageCard from "../components/ImageCard";

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
            <Hero backgroundImage="./images/fusco.jpg" />
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
            <Hero backgroundImage="./images/fusco.jpg" />
            <Carousel.Caption style={{ paddingBottom: 300 }}>
              <Animated
                animationIn="fadeIn"
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
                animationIn="fadeIn"
                animationInDelay="500"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>…Starting with open hands or</h1>
                </div>
                <div>
                  <h1>…From head to toes or</h1>
                </div>
                <div>
                  <h1> …Starting with the breath</h1>
                </div>
              </Animated>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Hero backgroundImage="./images/fusco.jpg" />
            <Carousel.Caption style={{ paddingBottom: 100 }}>
              <Animated
                animationIn="fadeIn"
                animationInDelay="1000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>
                    <img src="../images/hearts.jpg" alt="heart" hspace="20" />
                    <span className="image" style={{ fontSize: 50 }}>
                      Choose with your heart
                    </span>
                  </h1>
                </div>
              </Animated>
              <Animated
                animationIn="fadeIn"
                animationInDelay="1000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>On the next screen, images appear.</h1>
                  <h1>
                    Look at each, then click the <b>one</b>:
                  </h1>
                </div>
                <div>
                  <h1>you feel drawn to</h1>
                  <h1> or </h1>
                  <h1> that sparks curiosity</h1>
                  <br />
                  <h1>No need to overthink it, go with your gut.</h1>
                </div>
                <br />
                {/* <Link to="/imagepage" className="nav-link">
                  <br />
                  <button>See Images </button>
                </Link> */}
              </Animated>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ImagePage />
            {/* <Hero backgroundImage="./images/fusco.jpg" />
            <Carousel.Caption style={{ paddingBottom: 300 }}>
            */}
            {/* <Animated
                animationIn="fadeIn"
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
              </Animated> */}
            {/* <Animated
                animationIn="fadeIn"
                animationInDelay="500"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div>
                  <h1>…Starting with open hands or</h1>
                </div>
                <div>
                  <h1>…From head to toes or</h1>
                </div>
                <div>
                  <h1> …Starting with the breath</h1>
                </div>
              </Animated> */}
            {/* </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <Hero backgroundImage="./images/fusco.jpg" />
            <Carousel.Caption style={{ paddingBottom: 300 }}>
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <h2>
                  <p>
                    The image you chose will be waiting for you on the next
                    screen. As you look, ask:
                  </p>
                  <p>
                    What connections are there with a change I’d like to make in
                    the direction of….
                  </p>
                  <p>….greater compassion…</p>
                  <p> …being kinder…</p>
                  <p> …increased patience…</p>
                  <p> …more generosity… </p>
                  <p>…towards self, towards others, or both?</p>
                </h2>
              </Animated>
              <Animated
                animationIn="fadeIn"
                animationInDelay="500"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div />
              </Animated>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Hero backgroundImage="#" />
            <Carousel.Caption style={{ color: "black", paddingBottom: 100 }}>
              <Animated
                animationIn="fadeIn"
                animationInDelay="1000"
                animationOut="fadeOut"
                isVisible={true}
              >
                <br />
                <ImageCard />
                <h2>
                  Jot down a few words to capture connections between the image
                  and your aspiration for change.
                </h2>
                <h2>
                  If no thoughts come, just relax and rest your eyes on the
                  image.
                </h2>
                <h2>Thoughts may come later, or tomorrow.</h2>
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
                    Go On{" "}
                  </Button>
                </Link>
              </Animated>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Intro;
