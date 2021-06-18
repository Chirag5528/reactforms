import React, { Fragment } from "react";
import NewForm from "../Shared/NewForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
const table = [
  {
    name: "Test Form Templates",
    used: 3,
    slug: "test-form",
  },
  {
    name: "Test Form Templates",
    used: 3,
    slug: "test-form",
    published: true,
  },
  {
    name: "Test Form Templates",
    used: 3,
    slug: "test-form",
  },
];
const Templates = ({ props }) => {
  return (
    <Fragment>
      {/* {props.match} */}
      <Row className="align-items-center px-sm-2">
        <Col xs={6}>
          <h1>All Templates</h1>
        </Col>
        <Col xs={6} className="text-end">
          <NewForm title="New Template" link="/forms/new-form" />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Table responsive className="bordered hover">
                <thead className="thead-light">
                  <tr>
                    <th className="border-bottom">Sno</th>
                    <th className="border-bottom">Name</th>
                    <th className="border-bottom">Times Used</th>
                    <th className="border-bottom">Published</th>
                    <th className="border-bottom">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map((tab, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{tab.name}</td>
                        <td>{tab.used}</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input checked"
                              type="checkbox"
                              id={`flexSwitchCheckChecked${index}`}
                              defaultChecked={tab.published}
                            />
                          </div>
                        </td>
                        <td>
                          <Link to={`/forms/${tab.slug}`}>Edit</Link> |{" "}
                          <Link to={`/forms/${tab.slug}`}>Delete</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Templates;
