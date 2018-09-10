import React, { Component } from "react";
import axios from "axios";

import SideBar from "./SideBar";
import ProductList from "./ProductList";
import CarouselView from "./CarouselView";

class DashView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      prevProducts: [],
      isChecked: false
    };
    this.getProductList = this.getProductList.bind(this);
    // this.clearCheck = this.clearCheck.bind(this);
  }
  componentDidMount() {
    // const { isChecked } = this.state;
    let apiUrl = ` https://api.myjson.com/bins/4xc0c`;
    axios.get(apiUrl).then(res => {
      // console.log(res.data.products);
      this.setState({
        products: res.data.products,
        prevProducts: res.data.products,

        isChecked: this.state.isChecked
      });
    });
  }

  getProductList = item => {
    const { products, prevProducts,  isChecked } = this.state;

    // console.log(products);
    // console.log(item);
    let newProduct = [];
    if (isChecked === false && item === item) {
      for (let i = 0; i < products.length; i++) {
        if (products[i].ptype === item || products[i].title === item) {
          console.log(item);
          newProduct.push(products[i]);
        }
      }
      console.log(newProduct);
      this.setState({
        prevProducts: this.state.products,
        products: newProduct,
        isChecked: !isChecked
      });
    } else {
      console.log("unchecked");
      // console.log(newProduct);
      console.log(prevProducts);
      if (isChecked) {
        this.setState({
          products: prevProducts,
          isChecked: !isChecked
        });
      }
    }
  };

  render() {
    const { products, isChecked } = this.state;
    return (
      <div>
        <div className="main-container-view">
          <SideBar
            selectCheckBox = {isChecked}
            getProducts = {products}
            getFilterList = {this.getProductList}
          />
          <ProductList viewProducts = {products} />
        </div>
        <div className="carousel-container">
          <CarouselView />
        </div>
      </div>
    );
  }
}
export default DashView;
