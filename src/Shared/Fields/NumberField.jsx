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

const NumberField = () => {
  return (
    <React.Fragment>
      <div className="form-group col-12">
        <label htmlFor="number_field">Number Label Here</label>
        <input
          placeholder="kl"
          className="jkljk"
          name="number-1623940768952-preview"
          value="123123"
          min="1"
          max="22"
          step="1"
          type="number"
          id="number-1623940768952-preview"
          title="asklajsdkl"
        />
      </div>
    </React.Fragment>
  );
};

export default NumberField;
