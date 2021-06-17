import React from "react";
import FieldActions from "../FieldActions";

const ButtonField = ({
  control: { type, label, subtype, className, value },
}) => {
  return (
    <React.Fragment>
      <FieldActions>
        <button className={`btn ${className}`} type={subtype} value={value}>
          {label}
        </button>
      </FieldActions>
    </React.Fragment>
  );
};

export default ButtonField;
