/* 
{
    "type": "paragraph",
    "subtype": "p",
    "label": "Content is coming here",
    "className": "text class is coming here"
  }
  
*/
import React from "react";
import FieldActions from "../FieldActions";
const ParagraphField = () => {
  return (
    <React.Fragment>
      <FieldActions>
        <p className="class is coming here" id="id is coming here">
          this is content coming here
        </p>
      </FieldActions>
    </React.Fragment>
  );
};

export default ParagraphField;
