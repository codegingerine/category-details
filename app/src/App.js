import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import Music from "./View/Music";
import Articles from "./View/Articles";
import Notes from "./View/Notes";

import "./styles/styles.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/" component={Music} />
            <Route path="/articles" component={Articles} />
            <Route path="/notes" component={Notes} />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
