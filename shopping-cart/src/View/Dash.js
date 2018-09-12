import React, { Component } from "react";

import Header from './Header';
import ViewCart from './ViewCart';
import HeaderList from './HeaderList';

class Dash extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    alert('no data available');
  } 
  render(){
  return (
    <div className="headerview-details">
      <Header />
			<HeaderList handlechange = { this.handleClick }/>
      <ViewCart />
    </div>
  );
};
}
export default Dash;
