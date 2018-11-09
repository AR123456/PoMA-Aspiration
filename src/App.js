import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Relax from "./pages/Relax";
import Choose from "./pages/Choose";
import Change from "./pages/Change";
import Jot from "./pages/Jot";
import Form from "./pages/Form";
import ImagePage from "./pages/ImagePage";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import PandR from "./pages/PandR";

const App = () => (
  <Router>
    <div className="container-fluid">
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/pandr" component={PandR} />
        <Route exact path="/relax" component={Relax} />
        <Route exact path="/choose" component={Choose} />
        <Route exact path="/imagepage" component={ImagePage} />

        <Route exact path="/change" component={Change} />
        <Route exact path="/jot" component={Jot} />
        <Route exact path="/form" component={Form} />
      </Wrapper>

      <Footer />
    </div>
  </Router>
);

export default App;
