import React, { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";

class CarouselView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    console.log(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;
    return (
      <div className="carousel-view-container">
        <h2> Related Items </h2>
        <Carousel>
          <Carousel.Item>
          <Row>
            <Col xs={4}>
            <img width={101} height={220} alt="300x100" src="./Images/1.jpeg" />
            <Carousel.Caption>Asus</Carousel.Caption>
            </Col>
            <Col xs={4}>
            <img width={101} height={220} alt="300x100" src="./Images/2.jpeg" />
            <Carousel.Caption>Samsung</Carousel.Caption>
            </Col>
            <Col xs={4}>
            <img width={101} height={220} alt="300x100" src="./Images/3.jpeg" />
            <Carousel.Caption>Nokia</Carousel.Caption>
            </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
          <Row>
            <Col xs={4}>
            <img width={101} height={220} alt="300x100" src="./Images/4.jpeg" />
            <Carousel.Caption>Apple</Carousel.Caption>
            </Col>
            <Col xs={4}>
            <img width={101} height={220} alt="300x100" src="./Images/5.jpeg" />
            <Carousel.Caption>Micromax</Carousel.Caption>
            </Col>
            <Col xs={4}>
            <img width={101} height={220} alt="300x100" src="./Images/6.jpeg" />
            <Carousel.Caption>lenovo</Carousel.Caption>
            </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
        ;
      </div>
    );
  }
}

export default CarouselView;
