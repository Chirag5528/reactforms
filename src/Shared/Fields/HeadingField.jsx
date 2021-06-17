/**
  {
    "type": "header",
    "subtype": "h1",
    "label": "Header",
    "className": "abcd abcd abcd"
  }
*/

import React from "react";
import FieldActions from "../FieldActions";
const subType = "h1";

const Headings = () => {
  switch (subType) {
    case "h1":
      return <h1 className="abcd">Header</h1>;
    case "h2":
      return <h1 className="abcd">Header</h1>;
    case "h3":
      return <h3 className="abcd">Header</h3>;
    case "h4":
      return <h4 className="abcd">Header</h4>;
    case "h5":
      return <h5 className="abcd">Header</h5>;
    case "h6":
      return <h6 className="abcd">Header</h6>;
    default:
      return <h1 className="abcd">Header</h1>;
  }
};

const HeadingField = () => {
  return (
    <React.Fragment>
      <FieldActions>
        <Headings />
      </FieldActions>
    </React.Fragment>
  );
};

export default HeadingField;
