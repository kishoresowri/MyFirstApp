import React, { Component } from "react";
import "./Myapp.css";

import Dash from './Components/View/Dash';
import Footer from "./Components/View/Footer";
import SideBar from "./Main/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="myapp-info">
          <Dash />
          <SideBar />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
