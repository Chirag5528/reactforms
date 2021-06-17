/* 
  {
    "type": "hidden",
    "name": "hidden-1623940613970",
    "value": "asdasdasd"
  }
*/

import React from "react";

const HiddenField = ({ control: { field_name, type, name, value } }) => {
  const time = new Date().getTime();
  return (
    <React.Fragment>
      <input
        type="hidden"
        name={`hidden-${name}-${time}`}
        defaultValue={value}
        id={`hidden-${name}-${time}`}
      />
    </React.Fragment>
  );
};

export default HiddenField;
