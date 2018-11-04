import React, { Component } from "react";
import Aura from "../components/Aura";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import ImageCard from "../components/ImageCard";

class Inst extends Component {
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
            <Aura backgroundImage="./images/burden.jpg" />
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
            <Aura backgroundImage="#" />
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
                  <button>Next</button>
                </Link>
              </Animated>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default Inst;
