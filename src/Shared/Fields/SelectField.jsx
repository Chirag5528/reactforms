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
import FieldActions from "../FieldActions";

const SelectField = () => {
  const values = [
    {
      label: "Option 1",
      value: "option-1",
      selected: true,
    },
    {
      label: "Option 2",
      value: "option-2",
    },
    {
      label: "Option 3",
      value: "option-3",
    },
  ];
  return (
    <React.Fragment>
      <FieldActions>
        <div className="form-group col-12">
          <label htmlFor="id comes here">Label Comes Here</label>
          <select
            name="name comes here"
            id="id comes here"
            placeholder="placeholder comes here"
            className="form-control class comes here"
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
      </FieldActions>
    </React.Fragment>
  );
};

export default SelectField;
