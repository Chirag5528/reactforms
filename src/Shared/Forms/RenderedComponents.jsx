import React, { Fragment } from "react";
import LoadingComponent from "../LoadingComponent";

const RenderedComponents = ({ control }) => {
  return (
    <Fragment>
      {control.map((ctrl, index) => {
        console.log(ctrl);
        const Component = React.lazy(() =>
          import(`../Fields/${ctrl.component}`)
        );
        return (
          <React.Suspense key={index} fallback={LoadingComponent}>
            <Component key={index} control={ctrl} />
          </React.Suspense>
        );
      })}
    </Fragment>
  );
};

export default RenderedComponents;
