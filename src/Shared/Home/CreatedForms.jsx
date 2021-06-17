import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const CreatedForms = ({ table }) => {
  return (
    <React.Fragment>
      <Card className="border-0 shadow">
        <Card.Header>
          <Row className="align-items-center">
            <Col>
              <h2 className="fs-5 fw-bold mb-0">Created Forms</h2>
            </Col>
            <Col className="text-end">
              <Link to="/forms" className="btn btn-sm btn-primary">
                See all
              </Link>
            </Col>
          </Row>
        </Card.Header>
        <Table responsive className="align-items-center table-flush">
          <thead className="thead-light">
            <tr>
              <th className="border-bottom" scope="col">
                Sno
              </th>
              <th className="border-bottom" scope="col">
                Form Name
              </th>
              <th className="border-bottom" scope="col">
                Times Used
              </th>
            </tr>
          </thead>
          <tbody>
            {table.map((tab, index) => {
              return (
                <tr key={index}>
                  <th className="text-gray-900" scope="row">
                    {index}
                  </th>
                  <td className="fw-bolder text-gray-500">{tab.name}</td>
                  <td className="fw-bolder text-gray-500">
                    <svg
                      className="icon icon-xs text-danger me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {tab.used}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
    </React.Fragment>
  );
};

export default CreatedForms;
