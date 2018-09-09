import React, { Component } from "react";

class SideBar extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const target = e.target.id;
    if(!this.props.checked){
    if(target.checked === target.value) 
    this.props.getFilterList(target);
    } 
    
  }
  render(){
    // const getProducts = this.props.getProducts;
    // console.log(getProducts);
    // const { isChecked } = this.state;
  return (
    <div className="sidebar-details">
      <div className="search-info">
        <form>
          <h3>Search</h3>
          <input type="searchbox" placeholder="Search" />
          <hr />
        </form>
      </div>
      <div className="filter1">
        <form>
          <label>Filter By types: </label>
          <pre>
          <input type="checkbox" id="smartphone"
           value = "smartphone"
          //  checked = { this.props.selectCheckBox }
           onChange = { this.handleChange }
          /> 
          <label > Smart phone </label>
          </pre>
          <pre><input id="iphone"
          type="checkbox"
          // checked = { this.props.selectCheckBox }
          onChange = { this.handleChange }        
            // onChange = { this.props.getFilterList.bind(this) }
           /> <label> Feature phone </label></pre>
        </form>
        <hr />
      </div>
      <div className="filter2">
        <form>
          <label>Filter By Brands: </label>
          <pre><input type="checkbox" id="Apple"
          // checked = { this.props.selectCheckBox }
          onChange = { this.handleChange }
          /> <label> Apple</label></pre>
          <pre><input type="checkbox" id="Motorola"
          onChange = { this.handleChange }
           /> <label> Samsung</label></pre>
          <pre><input type="checkbox" id="Nokia" 
           onChange = { this.handleChange } 
           /> <label> Nokia</label></pre>
          <pre><input type="checkbox" id="Micromax"
           onChange = { this.handleChange } 
           /> <label> Micromax</label></pre>
        </form>
        <hr />
        <hr />
      </div>
      <div className="filter3">
        <form>
          <label>Filter By OPERATING SYSTEM: </label>
          <pre><input type="checkbox" id="smartphone"
           onChange = { this.handleChange } 
           /> <label> Android </label></pre>
          <pre><input type="checkbox" id="iphone"
          onChange = { this.handleChange } 
          /> <label> IOS </label></pre>
        </form>
        <hr />
        <hr />
      </div>
    </div>
  );
};
}

export default SideBar;
