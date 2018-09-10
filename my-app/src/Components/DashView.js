import React, { Component } from "react";
import axios from 'axios';

import SideBar from "./SideBar";
import ProductList from "./ProductList";
import CarouselView from "./CarouselView";

class DashView extends Component {
  constructor(props){
  super(props);
    this.state = {
      products : [],
      newData : [],
      isChecked : false
    };   
    this.getProductList = this.getProductList.bind(this);
    this.clearCheck = this.clearCheck.bind(this);
  }
  componentDidMount() {
    // const { isChecked } = this.state;
    var apiUrl = ` https://api.myjson.com/bins/4xc0c`;
    axios.get(apiUrl).then(res => {
      // console.log(res.data.products);
      this.setState({
        products: res.data.products,
        isChecked : this.state.isChecked
      });
    });
  } 
  toggleChange = () => {
    let checkStatus = this.state.isChecked;
    this.setState({
      isChecked : !checkStatus
    })
  }

  getProductList= (item) => {
    const { products, isChecked } = this.state;
    console.log(products);
    // console.log(item);
    let newProduct = [];
    if(((isChecked === false) && (item === "smartphone")) || (item === "iphone")){
      for(let i=0; i<products.length ;i++)
      {
        if((products[i].ptype === item)) 
        { 
          console.log(item);
          newProduct.push(products[i]);
        }
      } 
      console.log(newProduct);
      this.setState({
        products : newProduct,
        isChecked : !isChecked
      });
    }
      else if(item) {
        this.clearCheck(item);
      }
  }

  clearCheck = (item) => {
    if(!this.isChecked){
      this.setState({
        products : this.products,
        isChecked : !this.state.isChecked
      })
    }
  }

  render() {
    const { products, isChecked } = this.state;
    return (
      <div>
        <div className="main-container-view">
          <SideBar 
           selectCheckBox = { isChecked }          
           getProducts = { products } 
           getFilterList = { this.getProductList }
           onClick = { this.toggleChange }/>
          <ProductList viewProducts = { products } />
        </div>
        <div className="carousel-container">
          <CarouselView />
        </div>
      </div>
    );
  }
}
export default DashView;
