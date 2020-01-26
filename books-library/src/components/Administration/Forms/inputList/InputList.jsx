import React, { useState } from 'react'
import PropTypes from 'prop-types';

import BootstrapTable from 'react-bootstrap-table-next';
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';


var counter = 0;
const InputList = ({ list, onChange }) => {
  const [innerlsit, setInnerLsit] = useState(list.map((element) => {
    counter = counter + 1;
    return {
      name: element,
      id: counter,
    };
  }));
  const handleListChange = (line) => {
    setInnerLsit(
      innerlsit.map((element) => element.id === line.id
        ? line
        : element
      ))
  }
  const removeLine = (id) => {
    var result = innerlsit.filter((item) => {
      const res = item.id !== id
      console.log(item, id, res)
    });
    setInnerLsit(result)
  }

  const addLine = () => {
    setInnerLsit([
      ...innerlsit,
      {
        name: '',
        id: counter
      }
    ]);
    counter = counter + 1;
  }
  useEffect(() => {
    setInnerLsit(list.map((element) => {
      counter = counter + 1;
      return {
        name: element,
        id: counter,
      };
    }))
  }, [list])
  useEffect(() => {
    onChange(innerlsit.map((element) => element.name));
  }, [innerlsit])

  const actionsFormatter = (cell, row) => {
    return (
      <div>
        <Button
          type="button"
          onClick={() => removeLine(row.id)}
          variant="danger"
        >
          Delete
				</Button>
      </div>
    )
  }
  const inputFormatter = (cell, row) => {
    console.log(cell);

    return (<Form.Control
      value={cell}
      onChange={(e) => handleListChange({ name: e.target.value, id: row.id })}
    />
    )
  }
  const columns = [
    {
      dataField: "name",
      text: "SubCategories",
      formatter: inputFormatter,
    },
    {
      text: "Actions",
      formatter: actionsFormatter,
    }
  ]

  console.log(innerlsit);
  return (
    <div id="input-list">
      <BootstrapTable
        keyField='id'
        data={innerlsit}
        columns={columns}
      />
      <Button
        onClick={() => addLine()}
      >
        Add Line
      </Button>
    </div>
  )
}
InputList.propTypes = {
  list: PropTypes.array,
  onChange: PropTypes.func,
}
InputList.defaultProps = {
  list: [],
  onChange: () => { },
}
export default InputList
