import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'
import FormProperty from './FormProperty'
import FormConector from './FormConector'
import { useEffect } from 'react'
const initailContent = {
  name: '',
}
const TagForm = ({ id, entry, getEntry, updateEntry, createEntry, onCancel, onSubmit }) => {
  const [formContent, setFormContent] = useState(entry || initailContent);
  useEffect(() => {
    if (id && !entry.id) {
      getEntry("Tags", id);
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
      updateEntry("Tags", entry.id, formContent)
    } else {
      createEntry("Tags", formContent)
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
          title="Name"
          defaultValue={formContent.name}
          onChange={(val) => { handlePropertyChange({ name: val }) }}
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

TagForm.propTypes = {
  entry: PropTypes.object,
  createEntry: PropTypes.func,
  updateEntry: PropTypes.func,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
}


TagForm.defaultProps = {
  entry: {},
  createEntry: () => { },
  updateEntry: () => { },
  onCancel: () => { },
  onSubmit: () => { },
}

export default FormConector(TagForm);
