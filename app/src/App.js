import React, { Component } from "react";
import People from "./View/People";
import Header from "./Components/Header";
import Logo from "./assets/logo.svg";

import "./styles/styles.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header logoItem={<Logo/>} />
        <People />
      </div>
    );
  }
}

export default App;
