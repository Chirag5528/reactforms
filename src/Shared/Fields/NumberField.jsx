/* 
  {
    "type": "number",
    "required": true,
    "label": "Number",
    "description": "asklajsdkl",
    "placeholder": "kl",
    "className": "jkljk",
    "name": "number-1623940768952",
    "value": "123123",
    "min": "1",
    "max": "22",
    "step": "1"
  }
*/

import React from "react";
const NumberField = ({
  control: {
    field_name,
    type,
    label,
    description,
    placeholder,
    className,
    name,
    value,
    min,
    max,
    step,
    title,
  },
}) => {
  const time = new Date().getTime();
  return (
    <React.Fragment>
      <div className="form-group col-12">
        <label htmlFor={`${name}-${time}`}>{label}</label>
        <input
          placeholder={placeholder}
          className={`form-control ${className}`}
          name={`${name}-${time}`}
          value={value}
          min={min}
          max={max}
          step={step}
          type="number"
          id={`${name}-${time}`}
          title={title}
        />
      </div>
      <div className="form-group col-12">{description}</div>
    </React.Fragment>
  );
};

export default NumberField;
