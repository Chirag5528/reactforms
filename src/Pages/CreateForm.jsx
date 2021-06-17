import React, { Fragment, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewForm from "../Shared/NewForm";
import Card from "react-bootstrap/Card";
import { Accordion } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import controls from "../Shared/Controls.js";
import RenderedComponents from "../Shared/Forms/RenderedComponents";
const CreateForm = ({
  match: {
    params: { title },
  },
}) => {
  const [control, setControl] = useState([]);
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
          <Card>
            <Card.Header>
              <h6>Form Will Appear Here</h6>
            </Card.Header>
            <Card.Body>
              <RenderedComponents control={control} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card>
            <Card.Header>
              <h6>Form Controls</h6>
            </Card.Header>
            <Card.Body className="p-1">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle
                    className="p-2"
                    as={Card.Header}
                    eventKey="0"
                  >
                    Default Controls
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="p-1">
                      <ListGroup>
                        {controls.map((ctrl, index) => {
                          return (
                            <ListGroup.Item
                              onClick={() => {
                                setControl((control) => {
                                  return [...control, ctrl];
                                });
                              }}
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
                  <Accordion.Toggle
                    className="p-2"
                    as={Card.Header}
                    eventKey="1"
                  >
                    Your Templates
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Your Templates Will Appear Here</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle
                    className="p-2"
                    as={Card.Header}
                    eventKey="2"
                  >
                    Custom Controls
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Your Custom Generated Controls Will Appear Here
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CreateForm;
