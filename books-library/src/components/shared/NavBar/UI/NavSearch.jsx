import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const NavSearch = ({ onSearch }) => {
  const [searchContent, setSearchContent] = useState("");
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  )
}

export default NavSearch
