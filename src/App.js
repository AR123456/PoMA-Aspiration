import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Chosen from "./pages/Chosen";
import Home from "./pages/Home";
import ImagePage from "./pages/ImagePage";
import Inst from "./pages/Inst";
import Form from "./pages/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import Intro from "./pages/Intro";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />

        <Route exact path="/intro" component={Intro} />
        {/* <Route exact path="/chosen" component={Chosen} /> */}
        <Route exact path="/inst" component={Inst} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/imagepage" component={ImagePage} />
      </Wrapper>

      <Footer />
    </div>
  </Router>
);

export default App;
