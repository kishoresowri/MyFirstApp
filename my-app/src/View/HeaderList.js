import React from "react";
import { Button, Nav, Navbar, NavItem,  } from 'react-bootstrap';

const HeaderList = props => {
  return (
    <div className="header-list-details">
      <nav>
        <ul>
          <li><a href="#" > Mobiles</a> </li>
          <li><a href="#" > Men</a> </li>
          <li><a href="#" > Woman</a> </li>
          <li><a href="#" > Electronic</a> </li>
          <li><a href="#" > Home&Kitchen</a> </li>
          <li><a href="#" > Baby&Kids</a> </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderList;
