import React from "react";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";


const ProductList = (props) => {
    const viewProducts = props.viewProducts;
    // console.log(getProducts);
    return (
      <div className="list-container">
        <div className="mobile-list">
          <h3> Showing 12 mobiles </h3>
        </div>
        <Grid>
          <Row>
            { viewProducts.map((item, key) => (
              <Col xs={4}  key={item.id}>
                <figure>
                  <Image src={item.image} thumbnail />
                  <figcaption>{item.title}</figcaption>
                  <figcaption>
                    <label>Rs. </label>
                    {item.price}
                  </figcaption>
                </figure>
                <Button bsStyle="primary" onClick={this.handleShow}>
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
  }

export default ProductList;
