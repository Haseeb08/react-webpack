import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/index";
import About from "../About/index";
import Gallery from "../Gallery/index";
import "./style.css";

const Main = () => {
  return (
    <Router>
      <div>
        <div className="header">
          <Link className="link" to="/">Home</Link>

          <Link className="link" to="/about">About</Link>

          <Link className="link" to="/gallery">Gallery</Link>
        </div>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Main;
