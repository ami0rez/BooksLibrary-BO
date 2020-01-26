import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react';

const InputLine = ({ value, id, onChange, onDelete }) => {
  const [inputVal, setInputVal] = useState(value);
  useEffect(() => {
    onChange(inputVal)
  }, inputVal)
  return (
    <div>
      <Form.Control
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <Button onClick={() => onDelete(id)}>
        Remove
      </Button>
    </div>
  )
}

export default InputLine;
