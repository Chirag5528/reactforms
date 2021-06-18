import React from "react";

const ButtonField = ({
  control: { type, label, subtype, className, value },
}) => {
  return (
    <React.Fragment>
      <button className={`btn ${className}`} type={type} value={value}>
        {label}
      </button>
    </React.Fragment>
  );
};

export default ButtonField;
