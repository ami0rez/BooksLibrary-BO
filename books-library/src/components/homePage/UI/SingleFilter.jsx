import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input, FormText } from 'reactstrap';
import Autocomplete from 'react-autocomplete';

const SingleFilter = ({
    title,
    options,
    onChange,
    selectedValue,
}) => {
    const [value, setValue] = useState(selectedValue);
    console.log(options);

    useEffect(() => {
        onChange(value)
    }, [value])
    console.log(options);

    return (
        <div>
            <FormGroup>
                <Label for="exampleEmail">{title}</Label>
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
