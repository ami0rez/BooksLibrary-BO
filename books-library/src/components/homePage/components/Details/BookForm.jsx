import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Image, Container } from 'react-bootstrap'
import { useEffect } from 'react'
import FormProperty from '../../../Administration/Forms/FormProperty'
import { useParams } from 'react-router-dom'
import Assets from '../../../../business/constants/Assets'
const initailContent = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  phoneNumber: '',
}
const BookForm = ({ id, entry, getEntry, updateEntry, createEntry, onCancel, onSubmit }) => {
  const [formContent, setFormContent] = useState(entry || initailContent);
  const { bookid } = useParams();
  useEffect(() => {
    const entryId = id || bookid;
    if (entryId && !entry.id) {
      getEntry("Books", entryId);
    }
  }, [])
  useEffect(() => {
    console.log("entry updated");
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
      updateEntry("Books", entry.id, formContent)
    } else {
      createEntry("Books", formContent)
    }
    onSubmit();
  }

  const handleCancel = () => {
    window.location.href = "/"
  }
  console.log(formContent);

  return (
    <Container>
      <br />
      <FormProperty
        title="Cover"
      >
        <Image
          src={formContent.base64Image}
          onError={() => handlePropertyChange({ base64Image: Assets.BookDefaulmage })}
          height="80px"
        />
      </FormProperty>
      <Form onSubmit={handleSubmit}>
        <FormProperty
          readOnly
          title="Name"
          defaultValue={formContent.name}
          onChange={(val) => { handlePropertyChange({ name: val }) }}
        />
        <FormProperty
          title="Tags"
        >
          <ul>
            {
              formContent.tags
                ? formContent.tags.map((tag) => (<li>{tag && tag.name}</li>))
                : <>No Tag Found </>
            }
          </ul>
        </FormProperty>
        <FormProperty
          title="SubCategory"
        >
          <ul>
            {
              formContent.subCategories
                ? formContent.subCategories.map((subC) => (<li>{subC.name}</li>))
                : <>No SubCaregory Found </>
            }
          </ul>
        </FormProperty>
        <FormProperty
          title="Editor"
        >
          <label>{formContent.editor && `${formContent.editor.firstName} ${formContent.editor.lastName}`}</label>
        </FormProperty>
        <Button variant="primary" type="reset" onClick={handleCancel}>
          Return
        </Button><br /><br />
        <Button variant="primary" type="submit">
          Download
        </Button>
      </Form>
    </Container>
  )
}

BookForm.propTypes = {
  entry: PropTypes.object,
  createEntry: PropTypes.func,
  updateEntry: PropTypes.func,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  getEntry: PropTypes.func,
}


BookForm.defaultProps = {
  entry: {},
  createEntry: () => { },
  updateEntry: () => { },
  onCancel: () => { },
  onSubmit: () => { },
  getEntry: () => { },
}

export default BookForm;
