/* {
    "type": "radio-group",
    "required": true,
    "label": "This is label",
    "description": "THis is help text",
    "inline": true,
    "className": "this_is_radio",
    "name": "this_is_radio_class",
    "values": [
      {
        "label": "Option 1",
        "value": "option-1"
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

const RadioGroupField = ({
  control: {
    type,
    required,
    label,
    description,
    inline,
    className,
    name,
    values,
  },
}) => {
  const time = new Date().getTime();
  return (
    <React.Fragment>
      {values.map((val, index) => {
        return (
          <div
            className={inline ? `form-check-inline` : `form-check`}
            key={index}
          >
            <input
              class={`form-check-input ${className}`}
              type="radio"
              name={`${name}-${time}`}
              id={`${name}-${time}-${index}`}
              value={val.value}
              defaultChecked={val.selected ? true : false}
            />
            <label
              class="form-check-label"
              htmlFor={`${name}-${time}-${index}`}
            >
              {val.label}
            </label>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default RadioGroupField;
