import React, { Component } from "react";
import People from './View/People';

import './styles/reset.scss';
import './styles/global.scss';

class App extends Component {
  render() {
    return (
      <div>
        <People />
      </div>
    );
  }
}

export default App;
