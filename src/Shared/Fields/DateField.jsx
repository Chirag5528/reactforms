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
import FieldActions from "../FieldActions";
const DateField = () => {
  return (
    <React.Fragment>
      <FieldActions>
        <div className="form-group">
          <label htmlFor="dateField">Date Field</label>
          <input
            type="date"
            className="form-control"
            name="date"
            id="datefield"
            required
            placeholder="Enter Placeholder Here"
            value="02/02/2002"
          />
        </div>
        <div className="form-group">
          <small>Help Text</small>
        </div>
      </FieldActions>
    </React.Fragment>
  );
};

export default DateField;
