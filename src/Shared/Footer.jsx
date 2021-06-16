import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-white rounded shadow p-5 mb-4 mt-4">
        <div className="row">
          <div className="col-12 col-md-4 col-xl-6 mb-4 mb-md-0">
            <p className="mb-0 text-center text-lg-start">
              © 2021-<span className="current-year"></span>
              <Link
                className="text-primary fw-normal"
                to="https://themesberg.com"
                target="_blank"
              >
                Content Bloom
              </Link>
            </p>
          </div>
          <div className="col-12 col-md-8 col-xl-6 text-center text-lg-start">
            <ul
              className="
                list-inline list-group-flush list-group-borderless
                text-md-end
                mb-0
              "
            >
              <li className="list-inline-item px-0 px-sm-2">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Link to="/">Forms</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
