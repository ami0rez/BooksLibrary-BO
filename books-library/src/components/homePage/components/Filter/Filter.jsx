import React, { useState, useEffect } from 'react';
import SingleFilter from './SingleFilter';

import './Filter.css'

const selectedFilters = {
  authors: [],
  editors: [],
  categories: [],
  subCategories: [],
  tags: [],
}
const Filter = ({ filters, getFilters }) => {
  const [internalOptions, setInternalOptions] = useState(filters);
  const [selected, setSelected] = useState(selectedFilters);
  const handleChange = (newProperty) => {
    setSelected({
      ...selected,
      ...newProperty,
    })
  }

  useEffect(() => {
    getFilters(selected);
  }, [selected])
  return (
    <div id="filter">
      {/* Author */}
      <SingleFilter
        title="Author"
        options={filters.authors}
        onChange={(value => handleChange({ authors: value }))}
        selectedValue=""
      />
      {/* Editor */}
      <SingleFilter
        title="Editor"
        options={filters.editors}
        onChange={(value => handleChange({ editors: value }))}
        selectedValue=""
      />
      {/* Category */}
      <SingleFilter
        title="Category"
        options={filters.categories}
        onChange={(value => handleChange({ categories: value }))}
        selectedValue="ZZZ"
      />
      {/* SubCategory */}
      <SingleFilter
        title="SubCategory"
        options={filters.subCategories}
        onChange={(value => handleChange({ subCategories: value }))}
        selectedValue="ZZZ"
      />
      {/* Tags */}
      <SingleFilter
        title="Tags"
        options={filters.tags}
        onChange={(value => handleChange({ tag: value }))}
        selectedValue="ZZZ"
      />
    </div>
  )
}
Filter.defaultProps = {
  options: [],
  updateFilter: () => { }
}
export default Filter
