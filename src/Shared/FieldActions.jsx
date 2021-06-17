/**
 * This component is used as the wrapper of all the fields
 * It will include all the actions like delete, duplicate and edit
 */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import {
  faCopy,
  faPencilAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ListGroup from "react-bootstrap/ListGroup";

const FieldActions = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container-fluid fields_wrapper p-2 mb-3">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Row>
                  <Col className="align-items-center">
                    <p>Label Here</p>
                  </Col>
                  <Col>
                    <ListGroup
                      className="justify-content-end align-items-center"
                      horizontal
                    >
                      <ListGroup.Item>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <hr />
                  </Col>
                </Row>
                <Row>
                  <Col>{children}</Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default FieldActions;
