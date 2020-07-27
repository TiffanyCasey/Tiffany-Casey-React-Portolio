import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand id="favicon" href="/">TC</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink class="navStyle" href="/">ABOUT</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/projects">PROJECTS</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/skills/">SKILLS</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/contact/">CONTACT</NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>

      <h1 id="removeMobile">
        TIFFANY CASEY
      </h1>

    </div>
  );
}

export default NavBar;