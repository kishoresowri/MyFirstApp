import React from "react";
import { Button } from 'react-bootstrap';


const AddToCartView = (props) => {
  // console.log(cartProducts);

  console.log(props);
  return (
    <div className="cart-details">
         <h3> Cart Details </h3>
          <hr />
        {/* { props.cartProducts.map(prod => {
          return (
          <div>
            <span> { prod.ptype } </span>
          </div>
          )
        }) } */}

        <hr />
        <Button bsStyle="success"> Checkout </Button>
  </div>
);
}

export default AddToCartView;