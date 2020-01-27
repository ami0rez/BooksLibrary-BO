import React, { useEffect } from 'react'
import { logout } from '../../Actions/UserActions'
import { connect } from 'react-redux'

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
    window.location.replace('/')
  }, [])
  return (
    <div>

    </div>
  )
}
export default Logout;
