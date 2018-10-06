import React from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from "react-bootstrap";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

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

  render() {
    return (
      <Hero backgroundImage="./images/flag-splash.jpg">
        <h1> image chosen here </h1>
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
              value={this.state.value}
              placeholder="1 Enter text"
              onChange={this.handleChange}
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
              type="text"
              value={this.state.value}
              placeholder=" 2Enter text"
              onChange={this.handleChange}
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
              <h2>to moments when my habit has been</h2>{" "}
            </ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="3 Enter text"
              onChange={this.handleChange}
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
              <h2>by pausing when I recognize</h2>{" "}
            </ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder=" 4Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>
              <h2>This image will remind me to PAUSE, RELAX, and </h2>
            </ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="5 Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
          </FormGroup>
          <Button>Submit</Button>
        </form>
      </Hero>
    );
  }
}

// render(<Form />);

// const Form = () => (
//   <div>
//     <Hero backgroundImage="./images/flag-splash.jpg">
//       <h1>
//         Aspiration for building a new habit of: __________________________
//       </h1>

//       <Container style={{ marginTop: 30 }}>
//         <Row>
//           <Col size="md-6">
//             <h2>
//               I will bring at least a tiny amount more _________________to
//               moments when
//             </h2>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-6">
//             <h2>
//               I will bring at least a tiny amount more _________________to
//               moments when
//             </h2>
//           </Col>
//           <Col size="md-6">
//             <h2>
//               This image will remind me to PAUSE, RELAX, and
//               __________________________
//             </h2>
//           </Col>
//         </Row>
//         <button href="">Submit</button>
//       </Container>
//     </Hero>
//   </div>
// );
export default Form;
