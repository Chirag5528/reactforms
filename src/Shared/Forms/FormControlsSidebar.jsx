import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import { Accordion } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const FormControlsSidebar = ({
  controls,
  updateControls,
  updateControlsFromTemplate,
}) => {
  const templates = [
    {
      name: "Request Template",
      fields: [
        {
          component: "HeadingField",
          field_name: "Header",
          type: "header",
          subType: "h1",
          label: "Simple template to show",
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
    },
  ];

  return (
    <Fragment>
      <Card>
        <Card.Header>
          <h6>Form Controls</h6>
        </Card.Header>
        <Card.Body className="p-1">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle className="p-2" as={Card.Header} eventKey="0">
                Default Controls
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <Card.Body className="p-1">
                  <ListGroup>
                    {controls.map((ctrl, index) => {
                      return (
                        <ListGroup.Item
                          onClick={() => updateControls(ctrl)}
                          action
                          key={index}
                        >
                          {ctrl.field_name}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle className="p-2" as={Card.Header} eventKey="1">
                Your Templates
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ListGroup>
                    {templates.map((ctrl, index) => {
                      return (
                        <ListGroup.Item
                          onClick={() =>
                            updateControlsFromTemplate(ctrl.fields)
                          }
                          action
                          key={index}
                        >
                          {ctrl.name}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default FormControlsSidebar;
