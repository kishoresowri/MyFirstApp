import React from "react";
import { Button, Nav, Navbar, NavItem,  } from 'react-bootstrap';

const HeaderList = props => {
  return (
    <div className="header-list-details">
      <div className="mobile-info">
        <button>Mobiles</button>
      </div>
      <div className="men-info">
        <button>Men</button>
      </div>
      <div className="Woman-info">
        <button>Woman</button>
      </div>
      <div className="electronic-info">
        <button>Electronic</button>
      </div>
      <div className="home-info">
        <button>Home & Kitchen</button>
      </div>
      <div className="kids-info">
        <button>Baby & kids </button>
      </div>
    </div>
  );
};

export default HeaderList;
