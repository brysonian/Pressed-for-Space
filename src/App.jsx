import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Style } from "./Styles";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Style />
        <Router basename="/exhibitions/senior/pressed4space/">
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
