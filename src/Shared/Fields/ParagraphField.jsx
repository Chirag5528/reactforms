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
const ParagraphField = ({ control: { type, label, className } }) => {
  const time = new Date().getTime();
  return (
    <React.Fragment>
      <FieldActions>
        <p className={className} id={`${type}-${time}`}>
          {label}
        </p>
      </FieldActions>
    </React.Fragment>
  );
};

export default ParagraphField;
