import React, { Component } from "react";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import AddToCartView from "./AddToCartView";

class ProductList extends Component {
 constructor(props){
   super(props);
 }
  // console.log(viewProducts,'viewProducts');
  render(){
    const { viewProducts } = this.props;
  return (
    <div className="list-container">
      <div className="mobile-list">
        <h3> Showing { viewProducts.length } mobiles </h3>
      </div>
      <Grid>
        <Row>
          {viewProducts.map((item, key) => (
            <Col xs={8} md={4} lg={4}  key={item.id}>
              <figure>
                <Image src={item.image} thumbnail />
                <figcaption>{item.title}</figcaption>
                <figcaption>
                  <label>Rs. </label>
                  {item.price}
                </figcaption>
              </figure>
              <Button bsStyle="primary"  onClick={this.props.onChange}>
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
