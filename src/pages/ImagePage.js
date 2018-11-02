import React from "react";
import ImagePageCard from "../components/ImagePageCard";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import images from "../images.json";

class ImagePage extends React.Component {
  state = {
    images
  };
  render() {
    return (
      <Wrapper>
        {this.state.images.map(image => (
          <ImagePageCard id={image.id} key={image.id} image={image.image} />
        ))}
        <div>
          <h1 />
        </div>
        <Link to="/inst" className="nav-link">
          <button>Instructions</button>
        </Link>
      </Wrapper>
    );
  }
}

export default ImagePage;
