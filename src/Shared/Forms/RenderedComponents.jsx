import React, { Fragment, useEffect } from "react";
import Autocomplete from "../Fields/Autocomplete";
import ButtonField from "../Fields/ButtonField";
import DateField from "../Fields/DateField";
import CheckBoxGroupField from "../Fields/CheckBoxGroupField";

const RenderedComponents = ({ control }) => {
  useEffect(() => {
    console.log(control);
  });
  return (
    <Fragment>
      {control.map((ctrl, index) => {
        return <div key={index}>{ctrl.name}</div>;
      })}
      <Autocomplete />
      <ButtonField />
      <DateField />
      <CheckBoxGroupField />
    </Fragment>
  );
};

export default RenderedComponents;
