import React, { Component } from "react";
import Wrapper from "./Components/Wrapper";
import Music from "./View/Music";
import Header from "./Components/Header";

import "./styles/styles.scss";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header name="M" />
        <Music />
      </Wrapper>
    );
  }
}

export default App;
