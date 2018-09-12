import React, { Component } from "react";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import AddToCartView from "../Components/AddToCartView";

class ProductList extends Component {
  constructor(props){
    super(props);
   
  }

  action = () => {
   { getProducts.map((prod,key) => {
     { prod.ptype }
     { prod. price }
   })
  }
}  
// const ProductList = props => {
//   const getProducts = props.getProducts;
  // console.log(getProducts);
  render(){
    const getProducts = this.props.getProducts;
    
  return (
    <div className="list-container">
      <Grid>
        <Row>
          {getProducts.map((item, key) => (
            <Col xs={4} lg={4} key={item.id} >
              <figure>
                <Image src={item.image} thumbnail />
                <figcaption>{item.title}</figcaption>
                <figcaption><label>Rs. </label>{item.price}</figcaption>
              </figure>
              <Button bsStyle="primary" onClick={ this.props.action }>
                <i className="fa fa-shopping-cart" />
                Add
              </Button>
              <hr />
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};
}
export default ProductList;
