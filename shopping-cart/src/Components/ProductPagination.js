import React, { Component } from "react";
import Pagination from 'react-js-pagination';

class ProductPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
			activePage: 1,
			prodPerPage: 6
		};
		this.getProducts = this.props.getProducts;
	}

	handlePageChange = (pageNumber) => {
		  console.log(`active page is ${ pageNumber }`);
		  this.setState({
		    acitvePage : pageNumber
		  })
		}
	displayproducts = (acitvePage) => {
		this.props.componentDidMount(acitvePage);
	}	
  render() {
		const { getProducts } = this.props;
		
    return (
		<div className="pagination-details">
			<Pagination 
        acitvePage = { this.state.acitvePage }
        itemsCountPerPage = { 6 }
        totalItemsCount = { getProducts.length }
				onChange = { this.handlePageChange }
				displayList = { this.displayproducts }
      />
		</div>
		)
  }
}

export default ProductPagination;
