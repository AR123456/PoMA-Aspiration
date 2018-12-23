import React from "react";

import Container from "../components/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aura from "../components/Aura";

class Jot extends React.Component {
  render() {
    const image = JSON.parse(localStorage.getItem("currentImage"));
    // console.log(image, "myImage");
    return (
      <Aura backgroundImage="/public/images/lightrpblue.jpg">
        <Container style={{ padding: "5%" }}>
          <img
            src={image.image}
            style={{ height: "45%", width: "45%" }}
            alt="#"
          />
          <Container>
            <h2
              style={{ textAlign: "left", color: "black", paddingBottom: 100 }}
            >
              Jot down a few words to capture connections between the image and
              your aspiration for change. If no thoughts come, just relax and
              rest your eyes on the image.Thoughts may come later, or tomorrow.
              <br />
              <Link to="/form" className="nav-link">
                <Button
                  bsStyle="primary"
                  style={{ float: "right", marginRight: "40px" }}
                >
                  Go On
                </Button>
              </Link>
            </h2>
          </Container>
        </Container>
      </Aura>
    );
  }
}
export default Jot;
