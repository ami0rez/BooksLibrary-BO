import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'
import FormProperty from './FormProperty'
import FormConector from './FormConector'
import { useEffect } from 'react'
import InputList from './inputList/InputList'
import administrationServices from '../../../services/administrationServices'
const initailContent = {
  name: '',
  categoriess: [],
}
const BookForm = ({ id, entry, getEntry, updateEntry, createEntry, onCancel, onSubmit, userId }) => {
  const [formContent, setFormContent] = useState(entry || initailContent);
  const [tags, setTags] = useState([]);
  const [categs, setCategs] = useState([]);
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    if (id && !entry.id) {
      getEntry("books", id);
    }
    administrationServices.getAll("tags").then((result) => {
      setTags(result.map(t => ({ id: t.id, name: t.name })))
    })
    administrationServices.getAll("Author").then((result) => {
      setAuthors(result.map(t => ({ id: t.id, name: t.lastName + " " + t.firstName })))
    })
    administrationServices.getAll("Categories").then((result) => {
      setCategs(result.map(t => ({ id: t.id, name: t.name })))
    })
  }, [])
  useEffect(() => {
    setFormContent({ ...entry })
    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", entry);

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
    const formData = new FormData();
    formData.append('ressource', formContent.ressourcefile);
    console.log(formData);
    // formContent.ressource = formData;
    // formContent.userId = userId;
    administrationServices.create("Books", formData)
    // onSubmit();
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
        <FormProperty
          title="Author"
          type="select"
          options={authors}
          defaultValue={formContent.authors}
          onChange={(val) => { handlePropertyChange({ subcategory: val }) }}
        />
        <FormProperty
          title="SubCategory"
          type="select"
          options={categs}
          defaultValue={formContent.subcategory}
          onChange={(val) => { handlePropertyChange({ subcategory: val }) }}
        />
        <FormProperty
          title="Tag"
          type="select"
          options={tags}
          defaultValue={formContent.tag}
          onChange={(val) => { handlePropertyChange({ tags: val }) }}
        />
        <FormProperty
          title="Ressource"
        >
          <input
            type="file"
            onChange={(e) => { handlePropertyChange({ ressourcefile: e.target.files[0] }) }}
          />
        </FormProperty>
        <FormProperty
          title="Image"
        >
          <input
            type="file"
            onChange={(e) => { handlePropertyChange({ image: e.target.files[0] }) }}
          />
        </FormProperty>
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

BookForm.propTypes = {
  entry: PropTypes.object,
  createEntry: PropTypes.func,
  updateEntry: PropTypes.func,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
}


BookForm.defaultProps = {
  entry: {},
  createEntry: () => { },
  updateEntry: () => { },
  onCancel: () => { },
  onSubmit: () => { },
}

export default FormConector(BookForm);
