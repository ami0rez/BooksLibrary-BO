import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { AdminMenu, EditorMenu } from '../../../../business/constants/connectedUserMenus';

const UserDetails = ({ authentication }) => {
  const { user } = authentication;
  const actions = user.role === 0 ? AdminMenu : EditorMenu;
  return (<
    NavDropdown title={`${user.firstName} ${user.lastName}`} id="basic-nav-dropdown">
    {
      actions.map((action, key) => (
        <NavDropdown.Item href={action.path}>{action.name}</NavDropdown.Item>
      ))
    }
  </NavDropdown>
  )

}
UserDetails.propTypes = {
  name: PropTypes.string,
  actions: PropTypes.array,
}
UserDetails.defaultProps = {
  name: "",
  actions: [],
}
export default UserDetails;
