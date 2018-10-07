import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <button
            onClick={() => props.removeImage(props.id)}
            className="remove"
          >
            Select
          </button>
        </li>
      </ul>
    </div>
  </div>
);

export default ImageCard;
