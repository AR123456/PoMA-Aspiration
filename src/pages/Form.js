import React from "react";
import ImageCard from "../components/ImageCard";
import ImageForm from "../components/ImageForm";
import Wrapper from "../components/Wrapper";

import { Jumbotron } from "react-bootstrap";
class Form extends React.Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <ImageCard />
        </Jumbotron>
        <ImageForm />
      </Wrapper>
    );
  }
}

export default Form;
