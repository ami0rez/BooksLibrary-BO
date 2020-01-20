import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import globalStrings from '../../../strings/globalStrings';
import UserDetails from './UI/UserDetails';
import NavSearch from './UI/NavSearch';

const NavBarView = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{globalStrings.APPLICATION_NAME}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavSearch />
          <NavbarText>
            <UserDetails
              Name="Amirez"
              actions={[
                {
                  name: "Disconnect",
                  action: () => { console.log("disconnecting") }
                },
                {
                  name: "Disconnect",
                  action: () => { console.log("disconnecting") }
                },
                {
                  name: "Disconnect",
                  action: () => { console.log("disconnecting") }
                }
              ]}
            />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarView;