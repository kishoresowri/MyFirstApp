import React from "react";
import SideBar from "./SideBar";
import ProductView from "./ProductView";

const MainView = props => {
  return (
    <div className="main-container-view">
      <SideBar />
      <ProductView />
    </div>
  );
};

export default MainView;
