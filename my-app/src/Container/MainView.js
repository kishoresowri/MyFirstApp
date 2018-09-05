import React, { Component } from "react";
import SideBar from "./SideBar";
import ProductView from "./ProductView";
import CarouselView from "./CarouselView";

class MainView extends Component {
  render() {
    return (
      <div>
        <div className="main-container-view">
          <SideBar />
          <ProductView />
        </div>
        <div className="carousel-container">
          <CarouselView />
        </div>
      </div>
    );
  }
}
export default MainView;
