import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const FormFooter = ({ updateControlString, resetControls, controlString }) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  return (
    <Fragment>
      <Card>
        <Card.Body>
          <Row>
            <Col className="text-end">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  className="btn btn-info"
                  type="button"
                  onClick={() => {
                    updateControlString();
                    handleShow();
                  }}
                >
                  Get JSON
                </button>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => resetControls()}
                >
                  Clear
                </button>
                <DropdownButton
                  id="dropdown-item-button"
                  title="Save"
                  variant="success"
                >
                  <Dropdown.Item as="button">Save</Dropdown.Item>
                  <Dropdown.Item as="button">Save as Template</Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleClose} animation={false}>
        <Modal.Body>
          <Row>
            <Col>
              <textarea
                className="form-control"
                rows="15"
                defaultValue={controlString}
              ></textarea>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default FormFooter;
