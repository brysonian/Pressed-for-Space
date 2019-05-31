import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Style } from "./Styles";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Style />
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
