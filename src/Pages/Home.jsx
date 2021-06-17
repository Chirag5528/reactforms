import React, { Fragment } from "react";
import NewForm from "../Shared/NewForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnalyticsRow from "../Shared/AnalyticsRow";
import CreatedForms from "../Shared/Home/CreatedForms";
import FormsInfo from "../Shared/Home/FormsInfo";

const table = [
  {
    name: "/demo/admin/index.html",
    used: "3",
  },
  {
    name: "/demo/admin/index.html",
    used: "3",
  },
  {
    name: "/demo/admin/index.html",
    used: "3",
  },
  {
    name: "/demo/admin/index.html",
    used: "3",
  },
  {
    name: "/demo/admin/index.html",
    used: "3",
  },
];
export const Home = () => {
  return (
    <Fragment>
      <NewForm title="New Form" link="/forms/new-form" />
      <AnalyticsRow />
      <Row>
        <Col xl={8}>
          <Row>
            <Col>
              <CreatedForms table={table} />
            </Col>
          </Row>
        </Col>
        <Col xl={4}>
          <FormsInfo />
        </Col>
      </Row>
    </Fragment>
  );
};
export default Home;
