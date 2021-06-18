/**
 * This component is used as the wrapper of all the fields
 * It will include all the actions like delete, duplicate and edit
 */
import React from "react";
import Row from "react-bootstrap/Row";
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
      <div className="fields_wrapper mb-3">
        <Card
          style={{
            position: "relative",
          }}
        >
          <Card.Body>
            <ListGroup
              className="fields_list_group justify-content-end align-items-center"
              horizontal
            >
              <ListGroup.Item>
                <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
              </ListGroup.Item>
            </ListGroup>
            <Row>{children}</Row>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default FieldActions;
