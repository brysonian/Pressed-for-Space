import React, { Component } from 'react'

import { Style } from "./Styles";

export class App extends Component {
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
