import React from "react";
import { Button, Nav, Navbar, NavItem,  } from 'react-bootstrap';

const HeaderList = props => {
  return (
    <div className="header-list-details">
      <Navbar inverse collapseOnSelect>
          <Nav>
            <NavItem >
              <Button bsStyle="default">Mobiles</Button>
            </NavItem>
            <NavItem  >
             Woman
            </NavItem>
            <NavItem  >
             Electronic
            </NavItem>
            <NavItem  >
             Home & Kitchen
            </NavItem>
            <NavItem  >
             Baby & kids
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
};

export default HeaderList;
