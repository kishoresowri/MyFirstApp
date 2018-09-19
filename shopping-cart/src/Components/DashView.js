import React, { Component } from "react";
import axios from "axios";
import Pagination from 'react-js-pagination';

import SideBar from "./SideBar";
import ProductList from "./ProductList";
import AddToCartView from './AddToCartView';
import CarouselView from "./CarouselView";
// import ProductPagination from './ProductPagination';

class DashView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      results: [],
      prevProducts: [],
      isChecked: false,
      showData: false,
      currenctProduct: 1,
      activePage: 1,
      prodPerPage: 6,
      selectedId: null
    };
    this.getProductList = this.getProductList.bind(this);
    this.getSearchInfo = this.getSearchInfo.bind(this);
    // this.clearCheck = this.clearCheck.bind(this);
  }

  handleChange = (pageNumber) => {
    // const { activePage } = this.state;
    this.getProductDetails(pageNumber);
    console.log(`active page is ${ pageNumber }`);
    this.setState({
      activePage:pageNumber
    });
  }

  componentDidMount = () => { 
    this.getProductDetails(1);
  }

  getProductDetails(activePage) {
    // const { isChecked } = this.state;

    let apiUrl = `https://api.myjson.com/bins/4xc0c?id=${ activePage }&prodPerPage=6`;
    console.log(activePage);
    axios.get(apiUrl).then(response => {
      console.log(response.data.products);
      this.setState({
        products: response.data.products,
        prevProducts: response.data.products,
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

  addToCartHandler = (id) => {
    console.log(id);
    this.setState({
      selectedId: id
    })
  }

  // toggleChange = () => {
  //   console.log('clicked');
  //   const doesShow = this.state.showData;
  //   this.setState({
  //     showData: !doesShow
  //   })
  // }

  // onHide = () => {
  //   this.setState({
  //     showData : this.state.showData
  //   })
  // }

  // cartDetails = (dataFromChild) => {
  //   console.log(dataFromChild);
  // }

  render() {
    const { currenctProduct, prodPerPage } = this.state;


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
          <ProductList viewProducts={products} 
          action= { this.cartDetails } 
          handleClick= { () => this.addToCartHandler()     
          }
          />
        </div>
        <div className="pagination-details">
        <Pagination 
          acitvePage = { this.state.activePage }
          itemsPerPage = { 6 }
          totalItemsCount = { products.length }
          pageRangeDisplayed = { 2 }
          onChange = { this.handleChange }
        />
        </div>
        {/* <ProductPagination getProducts = { products } 
          getProdDetails = { this.getProductDetails }
        /> */}
        <div className="carousel-container">
          <CarouselView />
        </div>
      </div>
    );
  }
}
export default DashView;
