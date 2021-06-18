/* 
{
    "type": "paragraph",
    "subtype": "p",
    "label": "Content is coming here",
    "className": "text class is coming here"
  }
  
*/
import React from "react";
const ParagraphField = ({ control: { type, label, className } }) => {
  const time = new Date().getTime();
  return (
    <React.Fragment>
      <p className={className} id={`${type}-${time}`}>
        {label}
      </p>
    </React.Fragment>
  );
};

export default ParagraphField;
