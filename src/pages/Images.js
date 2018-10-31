import React, { Component } from "react";
import ImageCard from "../components/ImageCard";
import ImageForm from "../components/ImageForm";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import images from "../images.json";

import Hero from "../components/Hero";

class Images extends React.Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };

  renderImage = id => {
    // Filter this.state.images for images that is  equal to the id of image clicked
    const images = this.state.images.filter(image => image.id === id);
    // Set this.state.images equal to the new images array

    this.setState({ images });
  };

  // Map over this.state.images and render a ImageCard component for each image object
  render() {
    return (
      <Wrapper>
        {/* <Title>Click on Image to select it</Title> */}
        {this.state.images.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            image={image.image}
            renderImage={this.renderImage}
          />
        ))}
        <div>
          <h1>
            On click remember image show inst page then next page render image
            with inst thne image with form
          </h1>
        </div>
        {/* <ImageForm /> */}
        <Link to="/inst" className="nav-link">
          <button>Instructions></button>
        </Link>
      </Wrapper>
    );
  }
}

export default Images;
