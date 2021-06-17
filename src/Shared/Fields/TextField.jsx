/* 
  {
    "type": "text",
    "required": true,
    "label": "This is label",
    "description": "this is help text",
    "placeholder": "this is placeholder",
    "className": "form-control this is class",
    "name": "this-is-name",
    "value": "this is value",
    "subtype": "text",
    "maxlength": "255"
  }
*/

import React from "react";
import FieldActions from "../FieldActions";
const TextField = ({
  control: {
    type,
    required,
    label,
    description,
    placeholder,
    className,
    name,
    value,
    subtype,
    maxLength,
  },
}) => {
  const time = new Date().getTime();
  return (
    <React.Fragment>
      <FieldActions>
        <div className="form-group">
          <label htmlFor="id_comes_here">Label Comes Here</label>
          <input
            type={type}
            name={`${type}-${name}-${time}`}
            id={`${type}-${name}-${time}`}
            placeholder={placeholder}
            className={`form-control ${className}`}
            required={required}
            maxLength={maxLength}
          />
        </div>
        <div className="form-group col-12">
          <small>{description}</small>
        </div>
      </FieldActions>
    </React.Fragment>
  );
};

export default TextField;
