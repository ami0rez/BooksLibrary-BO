import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-autocomplete';
import { FormGroup, Form } from 'react-bootstrap';

const SingleFilter = ({
  title,
  options,
  onChange,
  selectedValue,
}) => {
  const [value, setValue] = useState(selectedValue);
  const getId = (name) => {
    const option = options && options.filter(o => o.name === name)[0];
    return option ? [option.id] : []
  }
  useEffect(() => {
    onChange(getId(value))
  }, [value])
  return (
    <div>
      <FormGroup>
        <Form.Label id="filter-label" for="exampleEmail">{title}</Form.Label>
        <Autocomplete
          getItemValue={(item) => item.name || ""}
          items={options || []}
          renderItem={(item) => {
            return (item.name.toLowerCase().includes(value.toLowerCase()) || value === "") ?
              (<div key={item.id}>
                {item.name || ""}
              </div>)
              : <></>
          }
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSelect={(val) => setValue(val)}
        />
      </FormGroup>
    </div>
  )
}
SingleFilter.defaultProps = {
  title: "",
  options: [],
  onChange: () => { },
  selectedValue: "",
}
export default SingleFilter;
