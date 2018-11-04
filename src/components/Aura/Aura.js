import React from "react";
import "./Aura.css";

const Aura = props => (
  <div
    className="Aura text-center"
    style={{
      backgroundImage: `url(${props.backgroundImage})`
    }}
  >
    {props.children}
  </div>
);

export default Aura;
