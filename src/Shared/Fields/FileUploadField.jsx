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

const FileUploadField = () => {
  return (
    <React.Fragment>
      <FieldActions>
        <div className="form-group col-12">
          <label htmlFor="fileUpload">File Upload</label>
          <input
            type="file"
            name="fileUpload"
            className="form-control"
            placeholder="Upload File Here"
            required
          />
          <small>Description Goes Here</small>
        </div>
      </FieldActions>
    </React.Fragment>
  );
};

export default FileUploadField;
