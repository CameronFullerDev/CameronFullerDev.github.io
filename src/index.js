import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Pages
import Home from "./page/Home";
import About from "./page/About";
import NotFound from "./page/NotFound";
import Portfolio from "./page/Portfolio";

// Components
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";

const routing = (
  <Router>
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />

          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>

      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
