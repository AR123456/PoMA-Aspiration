import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Caro from "./components/Caro";
import Frm from "./components/Frm";
import Grid from "./components/PicGrid";

import NavBar from "./components/NavBar";
import Player from "./components/Player";
import PicGrid from "./components/PicGrid";
import Home from "./components/Home";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/caro" component={Caro} />
    </div>
  </Router>
);
// class App extends Component {
//   render() {
//     return (
//       <Container>
//         <NavBar />
//         <Jumbo />
//         <Caro />
//         <Frm />
//         <Grid />
//       </Container>
//     );
//   }
// }

export default App;
