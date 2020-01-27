import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'
import FormProperty from './FormProperty'
import FormConector from './FormConector'
import { useEffect } from 'react'
import FormStateConector from './FormStateConector'
const initailContent = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  phoneNumber: '',
}
const ProfileForm = ({ id, entry, getProfile, updateProfile, createEntry, onCancel, onSubmit }) => {
  const [formContent, setFormContent] = useState(entry || initailContent);
  useEffect(() => {
    getProfile();
  }, [])
  useEffect(() => {
    console.log(entry);

    setFormContent({ ...entry })
  }, [entry])
  const handlePropertyChange = (prop) => {
    setFormContent({
      ...formContent,
      ...prop
    }
    )
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formContent)
    window.location.replace('/')
    onSubmit();
  }

  const handleCancel = () => {
    onCancel();
  }
  console.log(formContent);

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
          title="New Password"
          password
          defaultValue={formContent.password}
          onChange={(val) => { handlePropertyChange({ password: val }) }}
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

ProfileForm.propTypes = {
  entry: PropTypes.object,
  createEntry: PropTypes.func,
  updateEntry: PropTypes.func,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
}


ProfileForm.defaultProps = {
  entry: {},
  createEntry: () => { },
  updateEntry: () => { },
  onCancel: () => { },
  onSubmit: () => { },
}

export default FormStateConector(ProfileForm);
