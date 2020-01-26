import React from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux";


export default (component, notAuthenticatedComponet) => {
  return isUserConnected(component, notAuthenticatedComponet)
}

const isUserConnected = (Component, NotAuthenticatedComponent) => {

  class AuthenticationCheck extends React.Component {
    render() {
      const { authentication } = this.props;
      return (
        authentication.loggedIn
          ? (
            <Component {...this.props} />
          )
          : (
            <NotAuthenticatedComponent />
          )
      )
    }
  }
  AuthenticationCheck.propTypes = {
    authntication: PropTypes.object,
  }
  AuthenticationCheck.defaultProps = {
    authntication: {},
  }

  const mapStateToProps = (state) => ({ authentication: state.authentication });

  const mapDispatchToProps = {}

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticationCheck)
}