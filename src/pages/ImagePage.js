import React from "react";
import ImageCard from "../components/ImageCard";

import Container from "../components/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import images from "../images.json";

class ImagePage extends React.Component {
  state = {
    images
  };
  renderImage = id => {
    // Filter this.state.images for images that is  equal to the id of image clicked
    const images = this.state.images.filter(image => image.id === id);
    // Set this.state.images equal to the new images array
    console.log(images);
    localStorage.setItem("currentImage", JSON.stringify(images[0]));
    this.setState({ images });
  };
  render() {
    return (
      <Container style={{ padding: "5%" }}>
        {this.state.images.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            image={image.image}
            renderImage={this.renderImage}
          />
        ))}
        <Link to="/change" className="nav-link">
          <Button bsStyle="primary" style={{ float: "right" }}>
            Go On{" "}
          </Button>
        </Link>
      </Container>
    );
  }
}

export default ImagePage;
