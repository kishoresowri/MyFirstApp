import React, { Component } from "react";
import "./Myapp.css";

import Dash from './Components/View/Dash';
import Footer from "./Components/View/Footer";
import MainView from "./Main/MainView";

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
