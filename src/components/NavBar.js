import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse,
} from 'reactstrap';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  
  return (
    <header>
      <Navbar className="navbar" color="white" light expand="md">
        <NavbarBrand id="favicon" href="/">TC</NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>


          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink tag={Link} to="/">ABOUT</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/portfolio">PORTFOLIO</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/contact">CONTACT</NavLink>
            </NavItem>

          </Nav>
        </Collapse>

         
      </Navbar>

     

      <h1 className="TiffanyCasey" id="removeMobile">
        TIFFANY CASEY
      </h1>

    </header>
  );
}

export default NavBar;