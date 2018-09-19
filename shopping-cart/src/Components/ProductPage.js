import React, { Component } from "react";
import { Modal, Button, Image } from 'react-bootstrap';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
		};
		this.closeModal = this.closeModal.bind(this);
	}
	closeModal = () => {
		this.props.handleHide();
	}

  render() {
		const {products, handleShow:showModal} = this.props;
		// console.log(products);
    return (
      <div className="product-info">
        <Modal show={showModal } onHide={ this.closeModal }>
          <Modal.Header closeButton>
            <Modal.Title className="title-info">Product Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="product-body-info">
							<Image src={ products.image } />
                <div>
                  <p>{ products.title } </p>
                  <p>{ products.ptype } </p>
                  <p>Rs. { products.price } </p>
               </div>
						</div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.closeModal()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ProductPage;
