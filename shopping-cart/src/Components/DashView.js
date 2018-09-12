import React, { Component } from "react";
import axios from "axios";

import SideBar from "./SideBar";
import ProductList from "./ProductList";
import AddToCartView from './AddToCartView';
import CarouselView from "./CarouselView";

class DashView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      results: [],
      prevProducts: [],
      isChecked: false,
      showData: false
    };
    this.getProductList = this.getProductList.bind(this);
    this.getSearchInfo = this.getSearchInfo.bind(this);
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
        isChecked: this.state.isChecked,
        // results: this.state.results
      });
    });
  }

  getSearchInfo = item => {
    const { products, prevProducts } = this.state;
    let results = [];
    let temp = products;
    
    if (item && item.length > 0) {
      prevProducts.filter(prod => {  
        if ((prod.title.indexOf(item) > -1) || (item == prod.price) || (prod.ptype.indexOf(item) > -1)){
          results.push(prod);
           return results;
        }
      });
      console.log(results,"products list");   
      this.setState({   
        temp: products,
        products: results
     });

    } else {
        // console.log(temp,"results");       
        this.setState({
          products: prevProducts
        })
    }
  };

  getProductList = item => {
    const { products, prevProducts, isChecked } = this.state;

    // console.log(products);
    // console.log(item);
    let newProduct = [];

    if (!isChecked || item === item) {
      for (let i = 0; i < products.length; i++) {
        if (products[i].ptype === item || products[i].title === item) {
          // console.log(item);
          newProduct.push(products[i]);
        }
      }
      console.log(newProduct);
      this.setState({
        // prevProducts: this.state.products,
        products: newProduct,
        isChecked: !isChecked
      });
    } 
    else 
      console.log("unchecked");
      // console.log(newProduct);
      console.log(prevProducts);
      if (isChecked) {
        this.setState({
          products: prevProducts,
          isChecked: !isChecked
        });
      }
    
  };

  toggleChange = () => {
    console.log('clicked');
    const doesShow = this.state.showData;
    this.setState({
      showData: !doesShow
    })
  }

  onHide = () => {
    this.setState({
      showData : this.state.showData
    })
  }

  cartDetails = (dataFromChild) => {
    console.log(dataFromChild);
  }

  render() {
    const { products, isChecked } = this.state;
    let cartData = null;
    if(this.state.showData){
      cartData = (
        <div className="cart-panel">
        </div>
      );
    }
    return (
      <div>
        <div className="main-container-view">
          <SideBar
            selectCheckBox={isChecked}
            getProducts={products}
            getFilterList={this.getProductList}
            getSearchList={this.getSearchInfo}
          />
          <ProductList viewProducts={products} action= { this.cartDetails } 
          />
  
    
        </div>
        <div className="carousel-container">
          <CarouselView />
        </div>
      </div>
    );
  }
}
export default DashView;
