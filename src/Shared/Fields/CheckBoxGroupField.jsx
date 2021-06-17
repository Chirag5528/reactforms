/* 

  {
    "type": "checkbox-group",
    "required": true,
    "label": "aCheckbox Group",
    "description": "askldjakl",
    "inline": true,
    "className": "askdkasjd",
    "name": "checkbox-group-1623935694125",
    "values": [
      {
        "label": "Option 1",
        "value": "option-1",
        "selected": true
      },
      {
        "label": "Option2",
        "value": "option-2"
      }
    ]
  }

*/

import React from "react";
import FieldActions from "../FieldActions";

const CheckBoxGroupFIeld = ({
  control: {
    label,
    description,
    toggle,
    inline,
    className,
    name,
    values,
    required,
  },
}) => {
  return (
    <React.Fragment>
      <FieldActions>
        <div className="form-group">
          <p>
            {label}
            {required && <span className="fb-required">*</span>}
          </p>
        </div>
        {values.map((value, index) => {
          return (
            <div
              className={[
                inline ? `form-check-inline ${className}` : className,
              ]}
              key={index}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={value.value}
                  selected={value.selected}
                  name={name}
                  defaultChecked={value.checked}
                  required={required}
                />
                {value.label}
              </label>
            </div>
          );
        })}
        <div className="form-group col-12">
          <small>{description}</small>
        </div>
      </FieldActions>
    </React.Fragment>
  );
};

export default CheckBoxGroupFIeld;
