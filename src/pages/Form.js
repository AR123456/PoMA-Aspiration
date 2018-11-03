import React from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  InputGroup,
  Button
} from "react-bootstrap";
import ImageCard from "../components/ImageCard";
// import ImageForm from "../components/ImageForm";
import Wrapper from "../components/Wrapper";
import "./Form.css";
import { Jumbotron } from "react-bootstrap";
class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }
  getValidationState() {
    const length = this.state.value.length;
    if (length > 2) return "success";
    else if (length > 1) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
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
    return (
      <Wrapper>
        <ImageCard />
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>
              <h2> Aspiration for building a new habit of: </h2>
            </ControlLabel>
            <FormControl
              type="text"
              value={this.state.q1}
              placeholder="Describe the situation you want to react to differently and the new response you want to practice.  Be as specific as you can."
              onChange={this.handleChange}
              componentClass="textarea"
            />
            <FormControl.Feedback />
            {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>
              <h2> I will bring at least a tiny amount more </h2>
            </ControlLabel>
            <FormControl
              componentClass="select"
              value={this.state.q2}
              placeholder="select"
              onChange={this.handleChange}
            >
              <option value="select">select</option>
              <option value="other">kindness</option>
              <option value="other">patience</option>
              <option value="other">compassion</option>
              <option value="other">generosity</option>
              <option value="other">wisdom</option>
              <option value="other">diligence</option>
              <option value="other">effort</option>
              <option value="other">focus</option>
              <option value="other">mindfulness</option>
              <option value="other">presence</option>
              <option value="other">humor</option>
              <option value="other">curiosity</option>
            </FormControl>
            <FormControl.Feedback />
            {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>
              {" "}
              <h2>to moments when my habit has been</h2>{" "}
            </ControlLabel>
            <FormControl
              type="text"
              value={this.state.q3}
              placeholder="Describe the specific habit that you want to change."
              onChange={this.handleChange}
              componentClass="textarea"
            />
            <FormControl.Feedback />
            {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>
              {" "}
              <h2>
                by <strong>pausing</strong> when I recognize
              </h2>{" "}
            </ControlLabel>
            <FormControl
              type="text"
              value={this.state.q4}
              placeholder="Describe the particular body sensations or behavior that you want to recognize as signals that the habit is “launching.”"
              onChange={this.handleChange}
              componentClass="textarea"
            />
            <FormControl.Feedback />
            {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>
              <h2>
                This image will remind me to <strong>PAUSE, RELAX,</strong> and{" "}
              </h2>
            </ControlLabel>
            <FormControl
              type="text"
              value={this.state.q5}
              placeholder="Describe what you want the image above to remind you to do differently with your body in that moment, before you react."
              onChange={this.handleChange}
              componentClass="textarea"
            />
            <FormControl.Feedback />
            {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
          </FormGroup>
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.handleFormSubmit}
          >
            Print
          </Button>
        </form>
      </Wrapper>
    );
  }
}

export default Form;
