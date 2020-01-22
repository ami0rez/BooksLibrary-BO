import React from 'react';
import PropTypes from 'prop-types'

import './Header.css'
import { Navbar, Nav } from 'react-bootstrap';
import globalStrings from '../../../strings/globalStrings';
import UserDetails from './UI/UserDetails';
import ConnectionButton from './UI/ConnectionButton';
import withAuthentication from '../../../Hocs/withAuthentication';
const RelativeComponent = withAuthentication(UserDetails, ConnectionButton);
const Header = ({ userInfos }) => {
  return (
    <div id="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">{globalStrings.APPLICATION_NAME}</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        {/* <UserDetails
          name={userInfos && userInfos.name}
          actions={userInfos && userInfos.actions}
        /> */}
        <RelativeComponent />
      </Navbar>
    </div >
  );
}
Header.propTypes = {
  userInfos: PropTypes.object,
}

Header.propTypes = {
  userInfos: {}
}
export default Header;