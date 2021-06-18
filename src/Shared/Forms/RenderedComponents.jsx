import React, { Fragment } from "react";
import LoadingComponent from "../LoadingComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FormFooter from "./FormFooter";
import FieldActions from "../FieldActions";

const RenderedComponents = ({ control, resetControls }) => {
  const [controlString, setControlString] = React.useState("");

  const updateControlString = () => {
    setControlString(JSON.stringify(control, null, "\t"));
  };

  return (
    <Fragment>
      <React.Suspense fallback={LoadingComponent}>
        {control.length > 0 ? (
          <Fragment>
            {control.map((ctrl, index) => {
              const Component = React.lazy(() =>
                import(`../Fields/${ctrl.component}`)
              );
              return (
                <FieldActions key={index}>
                  <Component key={index} control={ctrl} />
                </FieldActions>
              );
            })}
            <FormFooter
              updateControlString={updateControlString}
              resetControls={resetControls}
              controlString={controlString}
            />
          </Fragment>
        ) : (
          <Row
            className="justify-content-center align-items-center m-2"
            style={{
              minHeight: "600px",
              borderStyle: "dotted",
            }}
          >
            <Col>
              <h6 className="text-center">Select Fields to Draw Form</h6>
            </Col>
          </Row>
        )}
      </React.Suspense>
    </Fragment>
  );
};

export default RenderedComponents;
