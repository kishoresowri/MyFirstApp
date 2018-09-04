import React, { Component } from 'react';

class ViewCart extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
 handleClick = (e) => {
    console.log('clicked');
 }

render() {
  return (
    <div className="viewcart-details">
      <span ><i className="fa fa-shopping-cart"></i>ViewCart</span>
    </div>
  );
}
}
export default ViewCart;
