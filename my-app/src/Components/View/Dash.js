import React from "react";

import Header from './Header';
import ViewCart from './ViewCart';
import RouteDetails from './RouteDetails';

const Dash = props => {
  return (
    <div className="headerview-details">
      <Header />
			<RouteDetails />
      <ViewCart />
    </div>
  );
};

export default Dash;
