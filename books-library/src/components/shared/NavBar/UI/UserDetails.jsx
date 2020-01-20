import React, { useState } from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';

const UserDetails = ({ Name, actions }) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <UncontrolledDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle nav caret>
        {Name}
      </DropdownToggle>
      <DropdownMenu right>
        {
          actions.map(child => (
            <DropdownItem key={child.name} onClick={console.log("yaay")}>{child.name}</DropdownItem>
          ))
        }
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default UserDetails;
