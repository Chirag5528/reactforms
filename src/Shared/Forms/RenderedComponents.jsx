import React, { Fragment, useEffect } from "react";

const RenderedComponents = ({ control }) => {
  useEffect(() => {
    console.log(control);
  });
  return (
    <Fragment>
      {control.map((ctrl, index) => {
        return <div key={index}>{ctrl.name}</div>;
      })}
    </Fragment>
  );
};

export default RenderedComponents;
