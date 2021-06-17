import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const NewForm = ({ link, title }) => {
  return (
    <Fragment>
      <div className="py-4">
        <div className="dropdown">
          <Link
            to={link}
            className="
              btn btn-gray-800
              d-inline-flex
              align-items-center
              me-2
              dropdown-toggle
            "
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <svg
              className="icon icon-xs me-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            {title}
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NewForm;
