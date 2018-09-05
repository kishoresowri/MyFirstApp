import React, { Component } from "react";
import "./sass/Style.css";

import Dash from './View/Dash';
import Footer from "./View/Footer";
import MainView from "./Container/MainView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="myapp-info">
          <Dash />
          <MainView />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
