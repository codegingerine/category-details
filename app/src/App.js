import React, { Component } from "react";
import Wrapper from "./Components/Wrapper";
import People from "./View/People";
import Header from "./Components/Header";

import "./styles/styles.scss";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header name="P" />
        <People />
      </Wrapper>
    );
  }
}

export default App;
