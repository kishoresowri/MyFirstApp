import React, { Component } from "react";
import axios from "axios";

import ProductList from "./ProductList";

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.cartDetails = this.cartDetails.bind(this);
  }
  componentDidMount() {
    var apiUrl = ` https://api.myjson.com/bins/4xc0c`;
    axios.get(apiUrl).then(res => {
      // console.log(res.data.products);
      this.setState({
        products: res.data.products
      });
    });
  }

  cartDetails = () => {
    console.log(clicked);
  }
  render() {
		const { products } = this.state;
    return (
      <div className="product-view-details">
        <h3> Showing 12 mobiles </h3>
        <ProductList 
				 getProducts = { products }
         addCartDetails = { this.cartDetails }
         />
      </div>
    );
  }
}

export default ProductView;
