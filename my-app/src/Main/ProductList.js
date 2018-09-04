import React from "react";
import { 
	Grid, 
	Row, 
	Col, 
	Image, 
	Button,
	Carousel } from "react-bootstrap";

const ProductList = props => {
  const getProducts = props.getProducts;
  console.log(getProducts);

  return (
    <div className="list-container">
      <Grid>
        <Row>
          {getProducts.map((item, key) => (
            <Col key={item.id} >
              <Image src={item.image} thumbnail />
              <pre>{item.title}</pre>
              <p>{item.price}</p>
              <Button bsStyle="primary">
                <i className="fa fa-shopping-cart" />
                Add
              </Button>
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default ProductList;
