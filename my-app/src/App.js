import React, { Component } from "react";
import "./sass/Style.css";

import Dash from './View/Dash';
import Footer from "./View/Footer";
import DashView from "./Components/DashView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="myapp-info">
          <Dash />
          <DashView />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
