import React, { Component } from "react";
import "./sass/Style.css";

import Dash from './View/Dash';
import Footer from "./View/Footer";
import DashView from "./Components/DashView";
import RouteDetails from './RouteDetails';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="myapp-info">
          <Dash />
          <DashView />
          <Footer />
          {/* <RouteDetails /> */}
        </div>
      </div>
    );
  }
}

export default App;
