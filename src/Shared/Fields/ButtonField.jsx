import React from "react";
import FieldActions from "../FieldActions";

const ButtonField = () => {
  return (
    <React.Fragment>
      <FieldActions>
        <button className="btn btn-info" type="button" value="Submit">
          Submit
        </button>
      </FieldActions>
    </React.Fragment>
  );
};

export default ButtonField;
