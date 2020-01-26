import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types'
import patterns from '../../business/constants/patterns';

import './LoginPage.css'


class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { login } = this.props;
    const { email, password } = this.state;
    if (email && password) {
      login(email, password);
    }
  }

  validateForm() {
    const { email, password } = this.state;
    return email.length > 0 && password.length > 0;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div id="login-background">
        <div id="login">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button id="login-button" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div >
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func,
  logout: PropTypes.func,
}

LoginPage.defaultProps = {
  login: () => { },
  logout: () => { },
}

export default LoginPage;