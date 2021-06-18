import React, { Fragment, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewForm from "../Shared/NewForm";
import RenderedComponents from "../Shared/Forms/RenderedComponents";
import FormControlsSidebar from "../Shared/Forms/FormControlsSidebar";
import controls from "../Shared/Controls.js";
const CreateForm = ({
  match: {
    params: { title },
  },
}) => {
  const [control, setControl] = useState([]);

  const resetControls = () => {
    setControl([]);
    alert("You form has been reset");
  };
  const updateControls = (ctrl) => {
    // console.log(ctrl);
    setControl((control) => {
      // console.log(ctrl);
      return [...control, ctrl];
    });
  };
  const updateControlsFromTemplate = (ctrl) => {
    setControl((control) => {
      return [...control, ...ctrl];
    });
  };
  return (
    <Fragment>
      <Row className="align-items-center px-sm-2">
        <Col xs={6}>
          <h1>New Form</h1>
        </Col>
        <Col xs={6} className="text-end">
          <NewForm title="Go Back" link="/forms" />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={8}>
          <RenderedComponents control={control} resetControls={resetControls} />
        </Col>
        <Col xs={4}>
          <FormControlsSidebar
            controls={controls}
            updateControls={updateControls}
            updateControlsFromTemplate={updateControlsFromTemplate}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default CreateForm;
