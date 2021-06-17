import React from "react";
import Card from "react-bootstrap/Card";
const FormsInfo = () => {
  return (
    <React.Fragment>
      <Card className="border-0 shadow">
        <Card.Header
          className="
                  d-flex
                  flex-row
                  align-items-center
                  flex-0
                  border-bottom"
        >
          <div className="d-block">
            <div className="h6 fw-normal text-gray mb-2">Total orders</div>
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
        </Card.Header>
        <Card.Body>
          <div className="ct-chart-ranking ct-golden-section ct-series-a"></div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default FormsInfo;
