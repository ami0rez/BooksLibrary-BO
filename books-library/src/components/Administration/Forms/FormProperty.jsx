import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Row } from 'react-bootstrap';

const RenderSimpleProperty = (
  required, type, placeHolder,
  defaultValue, options,
  onChange, readOnly,
  password,
  maxLength = null, minLength = null, pattern = null
) => {
  if (type === 'select') {
    return (
      <Form.Control
        required={required}
        as="select"
        disabled={readOnly}
        value={defaultValue}
        onchange={(e) => { onChange(e.target.value) }}>
        <option
          aria-label="select option"
        />
        {
          options && options.length && (
            options.map((option) => (
              <option
                key={option.id}
                value={option.id}
              >
                {option.name}
              </option>
            ))
          )
        }
      </Form.Control>
    )
  }
  else if (type === "text") {
    return (
      <Form.Control
        required={required}
        type={password ? "password" : "text"}
        disabled={readOnly}
        value={defaultValue}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        onChange={(e) => { onChange(e.target.value) }} />
    )
  }
  return ""
}

const FormProperty = ({
  title,
  required, type, placeHolder,
  defaultValue, options,
  onChange, readOnly,
  password,
  maxLength = null, minLength = null, pattern = null,
  children,
}
) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const handleChange = (value) => {
    setInputValue(value)
  }
  useEffect(() => {
    onChange(inputValue)
  }
    , [inputValue])
  useEffect(() => {
    setInputValue(defaultValue)
  }
    , [defaultValue])

  return (
    <div>
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          {title}
        </Form.Label>
        <Col sm="10">
          {
            children
              ? children
              :
              RenderSimpleProperty(required, type, placeHolder,
                inputValue, options,
                handleChange, readOnly,
                password,
                maxLength, minLength, pattern)
          }
        </Col>
      </Form.Group>
    </div>
  )
}


FormProperty.propTypes = {
  defaultValue: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.array,
  setInputValue: PropTypes.func,
  readOnly: PropTypes.bool,
  password: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  pattern: PropTypes.string,
}
FormProperty.defaultProps = {
  defaultValue: "",
  title: "",
  type: "text",
  options: [],
  onChange: () => { },
  readOnly: false,
  password: false,
  maxLength: undefined,
  minLength: undefined,
  pattern: undefined,
}

export default FormProperty;