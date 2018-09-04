import React, { Component } from "react";
import { Carousel, Row, Col } from 'react-bootstrap';

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
        {/* <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Row>
            <Carousel.Item>
              <Col md={4}>
                <img src="./Images/1.jpeg" alt="First slide" />
                <Carousel.Caption>
                  <p>Asus</p>
                </Carousel.Caption>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col md={4}>
                <img src="./Images/2.jpeg" alt="Second slide" />
                <Carousel.Caption>
                  <p>Nokia</p>
                </Carousel.Caption>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col md={4}>
                <img src="./Images/3.jpeg" alt="Third slide" />
                <Carousel.Caption>
                  <p>Micromax</p>
                </Carousel.Caption>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col md={4}>
                <img src="./Images/4.jpeg" alt="Fourth slide" />
                <Carousel.Caption>
                  <p>Lenovo</p>
                </Carousel.Caption>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col md={4}>
                <img src="./Images/5.jpeg" alt="Fifth slide"/>
                <Carousel.Caption>
                  <p>Samsung</p>
                </Carousel.Caption>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col md={4}>
                <img src="./Images/6.jpeg" alt="Sixth slide" />
                <Carousel.Caption>
                  <p>Apple</p>
                </Carousel.Caption>
              </Col>
            </Carousel.Item>
          </Row>
          <a
            className="carousel-control-prev"
            href=""
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
				</Carousel> */}
				<Carousel>
  <Carousel.Item>
    <img width={300} height={200} alt="300x200" src="./Images/2.jpeg" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={300} height={200} alt="300x200" src="./Images/1.jpeg" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={300} height={200} alt="300x200" src="./Images/3.jpeg" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;
      </div>
    );
  }
}

export default CarouselView;
