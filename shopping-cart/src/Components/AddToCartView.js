import React,{ Component } from "react";
import { Button } from 'react-bootstrap';

class AddToCartView extends Component {
  constructor(props){
    super(props);
  }
  render(){
  const { cartProducts } = this.props;
  console.log(cartProducts);
  { cartProducts.map(item => {
    console.log(item.title);
  })}
  return (
    <div className="cart-info" >
        <h3> Cart Details </h3>    
    </div>
  )
 
 }
}

export default AddToCartView;