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
const EditorForm = ({ id, entry, getEntry, updateEntry, createEntry, onCancel, onSubmit }) => {
  const [formContent, setFormContent] = useState(entry || initailContent);
  useEffect(() => {
    if (id && !entry.id) {
      getEntry("Editor", id);
    }
  }, [])
  useEffect(() => {
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
    if (entry && entry.id) {
      updateEntry("Editor", entry.id, formContent)
    } else {
      createEntry("Editor", formContent)
    }
    onSubmit();
  }

  const handleCancel = () => {
    onCancel();
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

EditorForm.propTypes = {
  entry: PropTypes.object,
  createEntry: PropTypes.func,
  updateEntry: PropTypes.func,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
}


EditorForm.defaultProps = {
  entry: {},
  createEntry: () => { },
  updateEntry: () => { },
  onCancel: () => { },
  onSubmit: () => { },
}

export default FormConector(EditorForm);
