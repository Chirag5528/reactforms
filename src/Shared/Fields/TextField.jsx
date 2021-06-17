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
const TextField = () => {
  return (
    <React.Fragment>
      <FieldActions>
        <div className="form-group">
          <label htmlFor="id_comes_here">Label Comes Here</label>
          <input
            type="text"
            className="form-control class comes here"
            name="name comes here"
            id="id_comes_here"
            required
            placeholder="Enter Placeholder Here"
            maxLength="255"
          />
        </div>
        <div className="form-group">
          <small>Description Comes Here</small>
        </div>
      </FieldActions>
    </React.Fragment>
  );
};

export default TextField;
