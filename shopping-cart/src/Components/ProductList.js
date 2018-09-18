import React, { Component } from "react";
import { Grid, Row, Col, Image, Button, Modal } from "react-bootstrap";
import AddToCartView from "./AddToCartView";
import ProductPage from "./ProductPage";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleHide() {
    this.setState({ show: false });
  }

  handleShow(item) {
    this.productDetails(item);
    this.setState({ show: true });
  }

  productDetails = prod => {
    console.log(prod);
    this.setState({
      prod : prod
    })
    // console.log(prod.title);
    // console.log(prod.id);
    // console.log(prod.price);
    // const { show } = this.state;

    // return (
    //   <Modal show={this.state.show} onHide={() => this.handleHide()}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Product Details</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <div className="prod-details">
    //         <span> {prod.id}</span>
    //         <span> {prod.title} </span>
    //         <span> {prod.price} </span>
    //         <span> {prod.ptype} </span>
    //       </div>
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button onClick={() => this.handleHide()}>Close</Button>
    //     </Modal.Footer>
    //   </Modal>
    //  );
  };

  render() {
    const { viewProducts } = this.props;
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
                    onClick={() => this.handleShow(item)}
                  />
                  <figcaption>{item.title}</figcaption>
                  <figcaption>
                    <span>Rs. </span>
                    {item.price}
                  </figcaption>
                </figure>
                <Button bsStyle="primary" onClick={this.props.handleClick}>
                  <i className="fa fa-shopping-cart" />
                  Add
                </Button>
                <hr />
              </Col>
            ))}
          </Row>
        </Grid>
        {/* <div>
          <ProductPage getProductPage = { this.productDetails } />
        </div> */}
        <Modal show={this.state.show} onShow={() => this.handleShow()} onHide={() => this.handleHide()}>
          <Modal.Header closeButton>
            <Modal.Title>Product Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                {/*   <Image src={item.image} />
                     <div className="prod-details">
                      {console.log(item.id)}
                        <span> {item.id}</span>
                        <span> {item.title} </span>
                        <span> {item.price} </span>
                        <span> {item.ptype} </span>
                      </div> */}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleHide()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ProductList;
