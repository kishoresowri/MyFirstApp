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
      <button onClick={ this.handleClick } ><i className="fa fa-shopping-cart"></i>ViewCart</button>
    </div>
  );
}
}
export default ViewCart;
