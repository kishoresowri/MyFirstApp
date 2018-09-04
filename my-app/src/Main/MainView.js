import React from "react";
import SideBar from "./SideBar";
import ProductView from "./ProductView";
import CarouselView from './CarouselView';

const MainView = props => {
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
};

export default MainView;
