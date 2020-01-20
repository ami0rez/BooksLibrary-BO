import React, { useState } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';

const NavSearch = ({ onSearch }) => {
  const [searchContent, setSearchContent] = useState("");
  return (
    <FormGroup>
      <Input
        type="text"
        name="search"
        id="search"
        placeholder="with a placeholder"
        value={searchContent}
        onChange={(e) => { setSearchContent(e.text) }}
      />
      <Button onClick={() => onSearch(searchContent)} />
    </FormGroup>
  )
}

export default NavSearch
