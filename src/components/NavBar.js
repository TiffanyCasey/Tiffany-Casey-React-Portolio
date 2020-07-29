import React from "react";
import {Link} from 'react-router-dom';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink,
} from 'reactstrap';

function NavBar () {

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand id="favicon" href="/">TC</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">ABOUT
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/portfolio">PORTFOLIO</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/skills">SKILLS</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/contact">CONTACT</NavLink>
            </NavItem>
          </Nav>
      </Navbar>

      <h1 id="removeMobile">
        TIFFANY CASEY
      </h1>

    </div>
  );
}

export default NavBar;