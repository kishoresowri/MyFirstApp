import React, { Component } from "react";
import { Grid, Row, Col, Image, Button, Modal } from "react-bootstrap";
import AddToCartView from "./AddToCartView";
import ProductPage from "./ProductPage";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prod: [],
      cart:[],
      show: false
    };
   
    // this.handleShow = this.handleShow.bind(this);
     this.handleHide = this.handleHide.bind(this);
  }
  handleHide() {
    this.setState({
      show: false
    })
  }

  productDetails = (prod) => {
    console.log(prod); 
    this.setState({
      prod: prod,
      show: true
    })
  };

  cartDetails = (cart) => {
    // console.log(cart);
   let cartView = this.state.cart;
   let item = cart;
   cartView.push(item);  
   console.log(cartView,'New Cart');
   localStorage.setItem("cartView", JSON.stringify(cartView));
  //  console.log(cartView,'cart products are');
    this.setState({
      cart: cartView 
    })
  }

  render() {
    const { viewProducts } = this.props;
    // console.log(viewProducts,'product Details')
    return (
      <div className="list-container">
        <div className="mobile-list">
          <h3> Showing {viewProducts.length} mobiles </h3>
        </div>
        <Grid>
          <Row>
            {viewProducts.map((item, key) => (
              <Col xs={8} md={4} lg={4} key={item.id}>
                <figure>
                  <Image
                    src={item.image}
                    thumbnail
                    onClick={() => this.productDetails(item)}
                  />
                  <figcaption>{item.title}</figcaption>
                  <figcaption>
                    <span>Rs. </span>
                    {item.price}
                  </figcaption>
                </figure>
                <Button bsStyle="primary" onClick={() => this.cartDetails(item)}>
                  <i className="fa fa-shopping-cart" />
                  Add
                </Button>
                <hr />
              </Col>
            ))}
          </Row>
        </Grid>
        <ProductPage 
        products = { this.state.prod }
        productDetails={this.productDetails}
        handleShow = {  this.state.show }
        handleHide = { this.handleHide }
       />
       <AddToCartView 
       cartProducts = { this.state.cart }
       cartDetials = { this.cartDetails }
       />
      </div>
    );
  }
}
export default ProductList;
