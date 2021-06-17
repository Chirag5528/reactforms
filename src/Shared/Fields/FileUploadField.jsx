/**
   {
    "type": "file",
    "required": true,
    "label": "File Upload",
    "description": "askldjkl",
    "placeholder": "kljkljl",
    "className": "form-control",
    "name": "file-1623939992779",
    "subtype": "file"
  }
*/

import React from "react";
import FieldActions from "../FieldActions";
const time = new Date().getTime();
const FileUploadField = ({
  control: {
    label,
    description,
    placeholder,
    className,
    name,
    multiple,
    required,
  },
}) => {
  return (
    <React.Fragment>
      <FieldActions>
        <div className="form-group col-12">
          <label htmlFor="fileUpload">{label}</label>
          <input
            type="file"
            name={`${name}-${time}`}
            id={`file-${name}-${time}`}
            className={`form-control ${className}`}
            placeholder={placeholder}
            required={required}
            multiple={multiple}
          />
        </div>
        <div className="form-group col-12">
          <small>{description}</small>
        </div>
      </FieldActions>
    </React.Fragment>
  );
};

export default FileUploadField;
