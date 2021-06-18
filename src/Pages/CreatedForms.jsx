import React, { Fragment } from "react";
import FieldActions from "../Shared/FieldActions";
import LoadingComponent from "../Shared/LoadingComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const CreatedForms = () => {
  const templates = {
    name: "Request Template",
    fields: [
      {
        component: "HeadingField",
        field_name: "Header",
        type: "header",
        subType: "h1",
        label: "Save your details here",
        className: "heading",
      },
      {
        component: "TextField",
        field_name: "Text Field",
        type: "text",
        required: true,
        label: "Enter Name",
        description: "Enter Name Here",
        placeholder: "Enter Name Here",
        className: "form-control",
        name: "text",
        value: "Enter Name",
        subtype: ["text", "password", "email", "color", "tel"],
        maxLength: "255",
      },
      {
        component: "RadioGroupField",
        field_name: "Radio Group",
        type: "radio-group",
        required: true,
        label: "Gender",
        description: "Select Your Gender",
        inline: true,
        className: "form-check-input",
        name: "radio-group",
        values: [
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Female",
            value: "female",
          },
          {
            label: "other",
            value: "other",
          },
        ],
      },
      {
        component: "SelectField",
        field_name: "Select",
        type: "select",
        required: true,
        label: "Your Favorite Fruit",
        description: "Please select your favourite fruit",
        placeholder: "This is placeholder",
        className: "form-control",
        name: "select",
        multiple: true,
        values: [
          {
            label: "Mango",
            value: "mango",
          },
          {
            label: "Apple",
            value: "apple",
          },
          {
            label: "Banana",
            value: "banana",
            selected: true,
          },
        ],
      },
      {
        component: "TextAreaField",
        field_name: "Text Area",
        type: "textarea",
        required: true,
        label: "Describe Your Request",
        placeholder: "Describe Your Request",
        className: "form-control",
        name: "request",
        value: "",
        subtype: ["textarea", "tinymce", "quill"],
        maxlength: 1200,
        rows: 5,
        title: "Enter Your Request in Detail Here",
      },
    ],
  };
  console.log(templates.fields);
  return (
    <Fragment>
      <React.Suspense fallback={LoadingComponent}>
        <FieldActions>
          {templates.fields.map((ctrl, index) => {
            const Component = React.lazy(() =>
              import(`../Shared/Fields/${ctrl.component}`)
            );
            return <Component key={index} control={ctrl} />;
          })}
          <Row>
            <Col className="text-end" xs={6}>
              <Button variant="primary" className="btn-block">
                Clear
              </Button>
            </Col>
            <Col className="text-end" xs={6}>
              <Button variant="success" className="btn-block">
                Save
              </Button>
            </Col>
          </Row>
        </FieldActions>
      </React.Suspense>
    </Fragment>
  );
};

export default CreatedForms;
