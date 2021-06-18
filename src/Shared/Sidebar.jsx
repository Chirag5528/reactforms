import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBootstrap, faProductHunt } from "@fortawesome/free-brands-svg-icons";
// import {
//   faHome,
//   faListAlt,
//   faTachometerAlt,
//   faUserAlt,
// } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <Fragment>
      <nav
        id="sidebarMenu"
        className="sidebar d-lg-block bg-gray-800 text-white collapse simplebar-scrollable-y"
        data-simplebar="init"
      >
        <div className="simplebar-wrapper" style={{ margin: "0px" }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask">
            <div
              className="simplebar-offset"
              style={{ right: "0px", bottom: "0px" }}
            >
              <div
                className="simplebar-content-wrapper"
                style={{ height: "auto", overflow: "hidden scroll" }}
              >
                <div className="simplebar-content" style={{ padding: "0px" }}>
                  <div className="sidebar-inner px-4 pt-3">
                    <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                      <div className="d-flex align-items-center">
                        <div className="avatar-lg me-4">
                          <img
                            src="../../assets/img/team/profile-picture-3.jpg"
                            className="card-img-top rounded-circle border-white"
                            alt="Bonnie Green"
                          />
                        </div>
                        <div className="d-block">
                          <h2 className="h5 mb-3">Hi, Jane</h2>
                          <Link
                            to="/"
                            className="btn btn-secondary btn-sm d-inline-flex align-items-center"
                          >
                            <svg
                              className="icon icon-xxs me-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                              ></path>
                            </svg>
                            Sign Out
                          </Link>
                        </div>
                      </div>
                      <div className="collapse-close d-md-none">
                        <Link
                          to="/"
                          data-bs-toggle="collapse"
                          data-bs-target="#sidebarMenu"
                        >
                          <svg
                            className="icon icon-xs"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <ul className="nav flex-column pt-3 pt-md-0">
                      <li className="nav-item">
                        <Link
                          to="/"
                          className="nav-link d-flex align-items-center"
                        >
                          <span className="sidebar-icon">
                            <img src={logo} alt="CB Logo" />
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item  active ">
                        <Link to="/" className="nav-link">
                          <span className="sidebar-icon">
                            <svg
                              className="icon icon-xs me-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                          </span>
                          <span className="sidebar-text">Dashboard</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/forms"
                          className="nav-link d-flex justify-content-between"
                        >
                          <span>
                            <span className="sidebar-icon">
                              <svg
                                className="icon icon-xs me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                              </svg>
                            </span>
                            <span className="sidebar-text">Forms</span>
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/templates"
                          className="nav-link d-flex justify-content-between"
                        >
                          <span>
                            <span className="sidebar-icon">
                              <svg
                                className="icon icon-xs me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <span className="sidebar-text">Your Templates</span>
                          </span>
                        </Link>
                      </li>
                      <li
                        role="separator"
                        className="dropdown-divider mt-4 mb-3 border-gray-700"
                      ></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: "260px", height: "614px" }}
          ></div>
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ width: "0px", display: "none" }}
          ></div>
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{ visibility: "visible" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              height: "201px",
              display: "block",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          ></div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
