/* 
  {
    "type": "hidden",
    "name": "hidden-1623940613970",
    "value": "asdasdasd"
  }
*/

import React from "react";

const HiddenField = () => {
  return (
    <React.Fragment>
      <input
        type="hidden"
        name="hidden"
        value="hidden_value"
        id="hidden_field"
      />
    </React.Fragment>
  );
};

export default HiddenField;
