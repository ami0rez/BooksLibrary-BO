import React, { useState, useEffect } from 'react';
import SingleFilter from './SingleFilter';
const Filter = ({ options,
  onChange,
}) => {
  const [internalOptions, setInternalOptions] = useState(options);
  const handleChange = (newProperty) => {
    setInternalOptions({
      ...internalOptions,
      newProperty,
    })
  }
  useEffect(() => {
    onChange(internalOptions);
  }, [internalOptions])
  return (
    <div>
      {/* Author */}
      <SingleFilter
        title="Author"
        options={options.authors}
        onChange={(value => handleChange({ selectedAuthor: value }))}
        selectedValue="ZZZ"
      />
      {/* Editor */}
      <SingleFilter
        title="Editor"
        options={options.editors}
        onChange={(value => handleChange({ selectedEditor: value }))}
        selectedValue="ZZZ"
      />
      {/* Category */}
      <SingleFilter
        title="Category"
        options={options.category}
        onChange={(value => handleChange({ selectedCategory: value }))}
        selectedValue="ZZZ"
      />
      {/* SubCategory */}
      <SingleFilter
        title="SubCategory"
        options={options.subCategory}
        onChange={(value => handleChange({ selectedSubCategory: value }))}
        selectedValue="ZZZ"
      />
      {/* Tags */}
      <SingleFilter
        title="Tags"
        options={options.tag}
        onChange={(value => handleChange({ selectedTag: value }))}
        selectedValue="ZZZ"
      />
    </div>
  )
}
Filter.defaultProps = {
  options: [],
  onChange: () => { }
}
export default Filter
