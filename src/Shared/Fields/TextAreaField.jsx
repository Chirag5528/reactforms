/* 
  {
    "type": "textarea",
    "required": true,
    "label": "This is Label",
    "description": "This is help text",
    "placeholder": "this is placeholder",
    "className": "form-control this_is_class",
    "name": "this_is_name_textarea",
    "value": "this_is_value",
    "subtype": "textarea",
    "maxlength": "123",
    "rows": "2"
  }
*/

import React from "react";
import FieldActions from "../FieldActions";
const TextAreaField = ({
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
    maxlength,
    rows,
    title,
  },
}) => {
  const time = new Date().getTime();

  return (
    <React.Fragment>
      <FieldActions>
        <div className="form-group">
          <label htmlFor={`${type}-${name}-${time}`}>{label}</label>
          <textarea
            placeholder={placeholder}
            className={`form-control ${className}`}
            name={`${type}-${name}-${time}`}
            maxlength={maxlength}
            rows={rows}
            type={type}
            id={`${type}-${name}-${time}`}
            title={title}
            spellcheck="false"
            required={required}
          >
            {value}
          </textarea>
        </div>
        <div className="form-group col-12">
          <small>{description}</small>
        </div>
      </FieldActions>
    </React.Fragment>
  );
};

export default TextAreaField;
