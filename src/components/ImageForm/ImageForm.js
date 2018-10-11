import React, { Component } from "react";

import "./ImageForm.css";

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

    // This alert should be changes to that on submit the text is rendered to the PDF to print it.
    // alert(`
    //   Aspiration for building a new habit of: ${this.state.q1}
    //   I will bring at least a tiny amount more ${
    //     this.state.q2
    //   }to moments when my habit has been ${this.state.q3} by pausing when I
    //   recognize ${
    //     this.state.q4
    //   }. This image will remind me to PAUSE, RELAX, and  ${this.state.q5}.
    // `);
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
          />{" "}
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
          {/* <h2>
            Aspiration for building a new habit of: {this.state.q1}
            <br />I will bring at least a tiny amount more {this.state.q2} to
            moments when my habit has been {this.state.q3} by pausing when I
            recognize {this.state.q4}.<br />
            This image will remind me to PAUSE, RELAX, and {this.state.q5}.
          </h2> */}
          <button onClick={this.handleFormSubmit}>Print</button>
        </form>
      </div>
    );
  }
}

export default ImageForm;
