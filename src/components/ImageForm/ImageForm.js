import React, { Component } from "react";

import "./ImageForm.css";
import Title from "../Title";

class ImageForm extends Component {
  // Setting the component's initial state
  state = {
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    window.print();
    this.setState({
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h1> TODO Render the on click image from the image page here </h1>
        <h1> update the form with the drop down and helper text from Ellen </h1>
        <form className="form">
          <label>Aspiration for building a new habit of: </label>
          <input
            value={this.state.q1}
            name="q1"
            onChange={this.handleInputChange}
            type="text"
            placeholder=""
          />
          <label>I will bring at least a tiny amount more </label>
          <input
            value={this.state.q2}
            name="q2"
            onChange={this.handleInputChange}
            type="text"
            placeholder=""
          />
          <label>to moments when my habit has been</label>
          <input
            value={this.state.q3}
            name="q3"
            onChange={this.handleInputChange}
            type="text"
            placeholder=""
          />
          <label>by pausing when I recognize</label>
          <input
            value={this.state.q4}
            name="q4"
            onChange={this.handleInputChange}
            type="text"
            placeholder=""
          />
          <label>This image will remind me to PAUSE, RELAX, and</label>
          <input
            value={this.state.q5}
            name="q5"
            onChange={this.handleInputChange}
            type="text"
            placeholder=""
          />
          <button onClick={this.handleFormSubmit}>Print</button>
        </form>
      </div>
    );
  }
}

export default ImageForm;
