import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };

  removeImage = id => {
    // Filter this.state.images for images with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.images equal to the new images array
    this.setState({ images });
  };

  // Map over this.state.images and render a ImageCard component for each image object
  render() {
    return (
      <Wrapper>
        <Title>Images List</Title>
        {this.state.images.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            // name={image.name}
            image={image.image}
            removeImage={this.removeImage}
            // occupation={image.occupation}
            // location={image.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
