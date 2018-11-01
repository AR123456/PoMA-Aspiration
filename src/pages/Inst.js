import React, { Component } from "react";
import Hero from "../components/Hero";
import { Carousel, Row, Col } from "react-bootstrap";
import Container from "../components/Container";

import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import ControlledCarousel from "./ControlledCarousel";

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
          {/* <Carousel.Item>
            <Hero backgroundImage="./images/fusco.jpg" />
            <Carousel.Caption>
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div style={{ paddingBottom: 400 }} />
              </Animated>
            </Carousel.Caption>
          </Carousel.Item> */}
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
              {/* <Animated
              animationIn="fadeInRight"
              animationInDelay="1000"
              animationOut="fadeOut"
              isVisible={true}
            >
              
            </Animated> */}
              <Animated
                animationIn="fadeIn"
                animationInDelay="500"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div />
              </Animated>
              {/* <Animated
              animationIn="fadeInRight"
              animationInDelay="3000"
              animationOut="fadeOut"
              isVisible={true}
            >
              
            </Animated> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Hero backgroundImage="./images/fusco.jpg" />
            <Carousel.Caption style={{ paddingBottom: 200 }}>
              <Animated
                animationIn="fadeIn"
                animationInDelay="1000"
                animationOut="fadeOut"
                isVisible={true}
              >
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
// const Inst = () => (
//   <div>
//     <Hero backgroundImage="./images/fusco.jpg">
//       <Container style={{ marginTop: 30 }}>
//         <Row>
//           <h2>
//             <Col size="md-12">
//               <Animated
//                 animationIn="fadeIn"
//                 animationOut="fadeOut"
//                 isVisible={true}
//               >
//                 {/* <p>
//                   The image you chose will be waiting for you on the next
//                   screen. As you look, ask:
//                 </p> */}
//               </Animated>
//               <Animated
//                 animationIn="fadeIn "
//                 animationOut="fadeOut"
//                 isVisible={true}
//               >
//                 {/* <p>
//                   What connections are there with a change I’d like to make in
//                   the direction of….
//                 </p>
//                 <p>….greater compassion…</p>
//                 <p> …being kinder…</p>
//                 <p> …increased patience…</p>
//                 <p> …more generosity… </p>
//                 <p>…towards self, towards others, or both?</p> */}
//                 <br />
//               </Animated>
//               <Animated
//                 animationIn="fadeIn"
//                 animationInDelay="6000"
//                 animationOut="fadeOut"
//                 isVisible={true}
//               >
//                 <br />
//                 <h2>
//                   Jot down a few words to capture connections between the image
//                   and your aspiration for change.
//                 </h2>
//                 <h2>
//                   If no thoughts come, just relax and rest your eyes on the
//                   image.
//                 </h2>
//                 <h2>Thoughts may come later, or tomorrow.</h2>
//               </Animated>
//             </Col>
//           </h2>
//         </Row>

//         <Animated
//           animationIn="fadeIn"
//           animationInDelay="6000"
//           animationOut="fadeOut"
//           isVisible={true}
//         >
//           <br />
//           {/* <Link to="/form" className="nav-link">
//             <button>Choose Image</button>
//           </Link> */}
//         </Animated>
//       </Container>
//     </Hero>
//   </div>
// );
export default Inst;
