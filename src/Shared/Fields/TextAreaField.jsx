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
const TextAreaField = () => {
  return (
    <React.Fragment>
      <FieldActions>
        <div className="form-group">
          <label htmlFor="id_comes_here">Label Comes Here</label>
          <textarea
            placeholder="this is placeholder"
            className="form-control this_is_class"
            name="this_is_name_textarea-preview"
            maxlength="123"
            rows="2"
            type="textarea"
            id="this_is_name_textarea-preview"
            title="This is help text"
            spellcheck="false"
          >
            this_is_value
          </textarea>
        </div>
        <div className="form-group">
          <small>Description Comes Here</small>
        </div>
      </FieldActions>
    </React.Fragment>
  );
};

export default TextAreaField;
