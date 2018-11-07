import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";

import Form from "./pages/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import Caro from "./pages/Caro";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/caro" component={Caro} />
        <Route exact path="/form" component={Form} />
      </Wrapper>

      <Footer />
    </div>
  </Router>
);

export default App;
