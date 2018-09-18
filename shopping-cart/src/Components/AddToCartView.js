import React,{ Component } from "react";
import { Button } from 'react-bootstrap';


class AddToCartView extends Component {
  constructor(props){
    super(props);
  }
  render(){
  const cartProducts = this.props;
  if(this.props.id){
      <div className="cart-details">
         <h3> Cart Details </h3>
          <hr />
          { cartProducts.image }
          { cartProducts.title }
          { cartProducts.price }
          {/* if (this.state.showData > 0) */}
        <hr />
        <Button bsStyle="success"> Checkout </Button>
  </div>
  }
  return <h3> Cart is Empty </h3>;
}
}

export default AddToCartView;