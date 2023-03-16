import React from "react";
import classes from './SelectItem.module.css'



const SelectItem = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value} onChange={event => onChange(event.target.value)}>

            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.id} item={option} >
                    {option.subscrib}
                </option>
            )}
        </select>
    );
};

export default SelectItem;