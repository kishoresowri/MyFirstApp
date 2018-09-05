import React from "react";
import { Grid, Row, Col, Image, Button, Carousel } from "react-bootstrap";

const ProductList = props => {
  const getProducts = props.getProducts;
  console.log(getProducts);

  return (
    <div className="list-container">
      <Grid>
        <Row>
          {getProducts.map((item, key) => (
            <Col xs={4} key={item.id} >
              <figure>
                <Image src={item.image} thumbnail />
                <figcaption>{item.title}</figcaption>
                <figcaption><label>Rs. </label>{item.price}</figcaption>
              </figure>
              <Button bsStyle="primary">
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

export default ProductList;
