import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const NavSearch = ({ options, setBookName, getFilteresBooks }) => {
  const [searchContent, setSearchContent] = useState("");
  useEffect(() => {
    setBookName(searchContent);
  }, [searchContent])
  const serchByName = () => {
    getFilteresBooks(options);
  }
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={searchContent}
        onChange={(e) => { setSearchContent(e.target.value) }}
      />
      <Button variant="outline-info" onClick={() => serchByName()}>Search</Button>
    </Form>
  )
}

NavSearch.propTypes = {
  setBookName: PropTypes.func,
  getFilteresBooks: PropTypes.func,
}

NavSearch.defaultProps = {
  setBookName: () => { },
  getFilteresBooks: () => { },
}
export default NavSearch;
