import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NewForm from "./NewForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnalyticsRow from "./AnalyticsRow";
const Content = () => {
  return (
    <Fragment>
      <main className="content">
        <NewForm />
        <AnalyticsRow />
        <Row>
          <Col xl={8}>
            <Row>
              <Col>
                <div className="card border-0 shadow">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h2 className="fs-5 fw-bold mb-0">Created Forms</h2>
                      </div>
                      <div className="col text-end">
                        <Link to="/forms" className="btn btn-sm btn-primary">
                          See all
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-items-center table-flush">
                      <thead className="thead-light">
                        <tr>
                          <th className="border-bottom" scope="col">
                            Page name
                          </th>
                          <th className="border-bottom" scope="col">
                            Page Views
                          </th>
                          <th className="border-bottom" scope="col">
                            Page Value
                          </th>
                          <th className="border-bottom" scope="col">
                            Bounce rate
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="text-gray-900" scope="row">
                            /demo/admin/index.html
                          </th>
                          <td className="fw-bolder text-gray-500">3,225</td>
                          <td className="fw-bolder text-gray-500">$20</td>
                          <td className="fw-bolder text-gray-500">
                            <div className="d-flex">
                              <svg
                                className="icon icon-xs text-danger me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              42,55%
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="text-gray-900" scope="row">
                            /demo/admin/forms.html
                          </th>
                          <td className="fw-bolder text-gray-500">2,987</td>
                          <td className="fw-bolder text-gray-500">0</td>
                          <td className="fw-bolder text-gray-500">
                            <div className="d-flex">
                              <svg
                                className="icon icon-xs text-success me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              43,24%
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="text-gray-900" scope="row">
                            /demo/admin/util.html
                          </th>
                          <td className="fw-bolder text-gray-500">2,844</td>
                          <td className="fw-bolder text-gray-500">294</td>
                          <td className="fw-bolder text-gray-500">
                            <div className="d-flex">
                              <svg
                                className="icon icon-xs text-success me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              32,35%
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="text-gray-900" scope="row">
                            /demo/admin/validation.html
                          </th>
                          <td className="fw-bolder text-gray-500">2,050</td>
                          <td className="fw-bolder text-gray-500">$147</td>
                          <td className="fw-bolder text-gray-500">
                            <div className="d-flex">
                              <svg
                                className="icon icon-xs text-danger me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              50,87%
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="text-gray-900" scope="row">
                            /demo/admin/modals.html
                          </th>
                          <td className="fw-bolder text-gray-500">1,483</td>
                          <td className="fw-bolder text-gray-500">$19</td>
                          <td className="fw-bolder text-gray-500">
                            <div className="d-flex">
                              <svg
                                className="icon icon-xs text-success me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              26,12%
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={4}>
            <div className="card border-0 shadow">
              <div
                className="
                  card-header
                  d-flex
                  flex-row
                  align-items-center
                  flex-0
                  border-bottom
                "
              >
                <div className="d-block">
                  <div className="h6 fw-normal text-gray mb-2">
                    Total orders
                  </div>
                  <h2 className="h3 fw-extrabold">452</h2>
                  <div className="small mt-2">
                    <span className="fas fa-angle-up text-success"></span>
                    <span className="text-success fw-bold">18.2%</span>
                  </div>
                </div>
                <div className="d-block ms-auto">
                  <div className="d-flex align-items-center text-end mb-2">
                    <span className="dot rounded-circle bg-gray-800 me-2"></span>
                    <span className="fw-normal small">July</span>
                  </div>
                  <div className="d-flex align-items-center text-end">
                    <span className="dot rounded-circle bg-secondary me-2"></span>
                    <span className="fw-normal small">August</span>
                  </div>
                </div>
              </div>
              <div className="card-body p-2">
                <div className="ct-chart-ranking ct-golden-section ct-series-a"></div>
              </div>
            </div>
          </Col>
        </Row>
        <Footer />
      </main>
    </Fragment>
  );
};

export default Content;
