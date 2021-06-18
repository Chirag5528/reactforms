/**
  {
    "type": "header",
    "subtype": "h1",
    "label": "Header",
    "className": "abcd abcd abcd"
  }
*/

import React from "react";
const Headings = ({ control: { type, subType, label, className } }) => {
  switch (subType) {
    case "h1":
      return <h1 className={className}>{label}</h1>;
    case "h2":
      return <h2 className={className}>{label}</h2>;
    case "h3":
      return <h3 className={className}>{label}</h3>;
    case "h4":
      return <h4 className={className}>{label}</h4>;
    case "h5":
      return <h5 className={className}>{label}</h5>;
    case "h6":
      return <h6 className={className}>{label}</h6>;
    default:
      return <h1 className={className}>{label}</h1>;
  }
};

const HeadingField = ({ control }) => {
  return (
    <React.Fragment>
      <Headings control={control} />
    </React.Fragment>
  );
};

export default HeadingField;
