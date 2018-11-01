import React from "react";
import "./ImagePageCard.css";

const ImageCard = props => (
  <div className="card">
    {/* <div className="img-container" onClick={() => props.renderImage(props.id)}> */}

    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li />
      </ul>
    </div>
  </div>
);

export default ImageCard;
