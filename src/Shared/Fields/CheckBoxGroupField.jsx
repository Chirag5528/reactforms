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

const CheckBoxGroupFIeld = () => {
  const values = [
    {
      label: "Option 1",
      value: "option-1",
      selected: true,
    },
    {
      label: "Option2",
      value: "option-2",
    },
  ];

  return (
    <React.Fragment>
      <FieldActions>
        <div className="form-group">
          <p>Label For Checkbox Group</p>
        </div>
        {values.map((value, index) => {
          return (
            <div className="form-check" key={index}>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={value.value}
                  selected={value.selected}
                />
                {value.label}
              </label>
            </div>
          );
        })}
        <div className="form-group">
          <small>Description Will Come here</small>
        </div>
      </FieldActions>
    </React.Fragment>
  );
};

export default CheckBoxGroupFIeld;
