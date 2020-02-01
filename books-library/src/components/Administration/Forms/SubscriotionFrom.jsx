import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'
import FormProperty from './FormProperty'
import FormConector from './FormConector'
import { useEffect } from 'react'
const initailContent = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  phoneNumber: '',
}
const SubscriptionForm = ({ createEntry, login }) => {
  const [formContent, setFormContent] = useState(initailContent);
  const handlePropertyChange = (prop) => {
    setFormContent({
      ...formContent,
      ...prop
    }
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createEntry("Editor", formContent).then(
      () => {
        login(formContent.email, formContent.password)
      }
    )

  }

  const handleCancel = () => {
    window.location.href = '/';
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormProperty
          title="First Name"
          defaultValue={formContent.firstName}
          onChange={(val) => { handlePropertyChange({ firstName: val }) }}
        />
        <FormProperty
          title="Last Name"
          defaultValue={formContent.lastName}
          onChange={(val) => { handlePropertyChange({ lastName: val }) }}
        />
        <FormProperty
          title="Email"
          defaultValue={formContent.email}
          onChange={(val) => { handlePropertyChange({ email: val }) }}
        />
        <FormProperty
          title="Password"
          password
          defaultValue={formContent.password}
          onChange={(val) => { handlePropertyChange({ password: val }) }}
        />
        <FormProperty
          title="Repeat Password"
          password
          defaultValue={formContent.password2}
          onChange={(val) => { handlePropertyChange({ password2: val }) }}
        />
        <FormProperty
          title="Phone number"
          defaultValue={formContent.phoneNumber}
          onChange={(val) => { handlePropertyChange({ phoneNumber: val }) }}
        />
        <FormProperty
          title="Address"
          defaultValue={formContent.address}
          onChange={(val) => { handlePropertyChange({ address: val }) }}
        />
        <Button variant="primary" type="reset" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

SubscriptionForm.propTypes = {
  createEntry: PropTypes.func,
  login: PropTypes.func,
}


SubscriptionForm.defaultProps = {
  createEntry: () => { },
  login: () => { },
}

export default FormConector(SubscriptionForm);