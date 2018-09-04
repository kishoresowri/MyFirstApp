import React from "react";
import { Button, Nav, Navbar, NavItem,  } from 'react-bootstrap';

const HeaderList = props => {
  return (
    <div className="header-list-details">
      <div className="mobile-info">
        <span>Mobiles</span>
      </div>
      <div className="men-info">
      <span>Men</span>
      </div>
      <div className="Woman-info">
      <span>Woman</span>
      </div>
      <div className="electronic-info">
      <span>Electronic</span>
      </div>
      <div className="home-info">
      <span>Home & Kitchen</span>
      </div>
      <div className="kids-info">
      <span>Baby & Kids</span>
      </div>
    </div>
  );
};

export default HeaderList;
