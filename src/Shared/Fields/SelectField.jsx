/*   {
    "type": "select",
    "required": true,
    "label": "This is Label",
    "description": "This is help Text",
    "placeholder": "this is placeholder",
    "className": "form-control this is class",
    "name": "this-is-name-for-the-select-box",
    "values": [
      {
        "label": "Option 1",
        "value": "option-1",
        "selected": true
      },
      {
        "label": "Option 2",
        "value": "option-2"
      },
      {
        "label": "Option 3",
        "value": "option-3"
      }
    ]
  } */

import React from "react";
const SelectField = ({
  control: {
    field_name,
    type,
    required,
    label,
    description,
    placeholder,
    className,
    name,
    multiple,
    values,
  },
}) => {
  const time = new Date().getTime();
  return (
    <React.Fragment>
      <div className="form-group col-12">
        <label htmlFor={`${type}-${name}-${time}`}>{label}</label>
        <select
          name={`${type}-${name}-${time}`}
          id={`${type}-${name}-${time}`}
          placeholder={placeholder}
          className={`form-control ${className}`}
        >
          {values.map((val, index) => {
            return (
              <option
                value={val.value}
                selected={val.selected ? true : false}
                key={index}
              >
                {val.label}
              </option>
            );
          })}
        </select>
      </div>
    </React.Fragment>
  );
};

export default SelectField;
