import React from "react";
import { 
	Grid, 
	Row, 
	Col, 
	Image, 
	Button,
	Carousel } from "react-bootstrap";

const ProductList = props => {
  console.log(props);
  const getProducts = props.getProducts;
  console.log(getProducts);

  return (
    <div className="list-container">
      <Grid>
        <Row>
          {getProducts.map((item, key) => (
            <Col key={item.id} xs={6} md={4}>
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
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/carousel.png" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/carousel.png" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/carousel.png" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProductList;
