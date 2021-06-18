/* 
  {
    "type": "date",
    "required": true,
    "label": "Date Field",
    "description": "asjdkaskljdklasjdklaj",
    "placeholder": "askljdlkasjdkljaskldjsklad",
    "className": "form-control",
    "name": "date-1623935497537"
  }
*/

import React from "react";
const DateField = ({
  control: { type, required, label, description, placeholder, className, name },
}) => {
  const time = new Date().getTime();
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={`dateField-${name}-${time}}`}>{label}</label>
        <input
          type={type}
          className={`form-control ${className}`}
          name={`${name}_${time}}`}
          id={`dateField-${name}-${time}}`}
          required={required}
          placeholder={placeholder}
        />
      </div>
      <div className="form-group col-12">
        <small>{description}</small>
      </div>
    </React.Fragment>
  );
};

export default DateField;
