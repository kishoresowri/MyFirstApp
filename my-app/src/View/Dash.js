import React from "react";

import Header from './Header';
import ViewCart from './ViewCart';
import HeaderList from './HeaderList';

const Dash = props => {
  return (
    <div className="headerview-details">
      <Header />
			<HeaderList />
      <ViewCart />
    </div>
  );
};

export default Dash;
