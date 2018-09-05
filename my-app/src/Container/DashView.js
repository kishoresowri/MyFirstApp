import React, { Component } from "react";
import SideBar from "./SideBar";
import ProductView from "./ProductView";
import CarouselView from "./CarouselView";

class DashView extends Component {
  constructor(props){
  super(props);
    this.state = {
      isChecked : false
    }
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter = (e) => {
    console.log('check box clicked');
  }
  render() {
    return (
      <div>
        <div className="main-container-view">
          <SideBar 
           handleFilter = { this.state.handleFilter } />
          <ProductView />
        </div>
        <div className="carousel-container">
          <CarouselView />
        </div>
      </div>
    );
  }
}
export default DashView;
