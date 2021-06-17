import React, { Fragment, useEffect } from "react";
import Autocomplete from "../Fields/Autocomplete";
import ButtonField from "../Fields/ButtonField";
import DateField from "../Fields/DateField";
import CheckBoxGroupField from "../Fields/CheckBoxGroupField";
import FileUploadField from "../Fields/FileUploadField";
import HeadingField from "../Fields/HeadingField";
import HiddenField from "../Fields/HiddenField";
import ParagraphField from "../Fields/ParagraphField";
import SelectField from "../Fields/SelectField";
import TextField from "../Fields/TextField";
import TextAreaField from "../Fields/TextAreaField";

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
      <FileUploadField />
      <HeadingField />
      <HiddenField />
      <ParagraphField />
      <SelectField />
      <TextField />
      <TextAreaField />
    </Fragment>
  );
};

export default RenderedComponents;
