import React from "react";

import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aura from "../components/Aura";

class Jot extends React.Component {
  render() {
    const image = JSON.parse(localStorage.getItem("currentImage"));
    // console.log(image, "myImage");
    return (
      <Aura>
        <Wrapper style={{ padding: "5%" }}>
          <img src={image.image} style={{ height: "300px", width: "300px" }} />
          <Container>
            <h2
              style={{ textAlign: "left", color: "black", paddingBottom: 100 }}
            >
              Jot down a few words to capture connections between the image and
              your aspiration for change. If no thoughts come, just relax and
              rest your eyes on the image.Thoughts may come later, or tomorrow.
            </h2>
          </Container>
          <Link to="/form" className="nav-link">
            <Button bsStyle="primary" bsSize="large">
              Go On
            </Button>
          </Link>
        </Wrapper>
      </Aura>
    );
  }
}
export default Jot;
