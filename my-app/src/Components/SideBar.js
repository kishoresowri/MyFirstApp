import React, { Component } from "react";

class SideBar extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   query : ''
    // },
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.getSearchList = this.props.getSearchList.bind(this);
  }

  handleInputChange = (e) => {
    const searchItem = e.target.value;
    console.log(searchItem);
    this.props.getSearchList(searchItem);
  }


  handleChange = (e) => {
    const target = e.target.id;
    console.log(target);
    if(!this.props.checked){
    // if(target.checked === target.value) 
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
          <input type="searchbox" placeholder="Search"
          onKeyUp = { this.handleInputChange }  />
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
          <pre><input type="checkbox" id="Samsung JS"
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
