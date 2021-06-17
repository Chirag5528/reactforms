import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const LoadingComponent = () => {
  return (
    <React.Fragment>
      <div
        className="loader w-100"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(230 224 224)",
          zIndex: 100,
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <FontAwesomeIcon icon={faSpinner} spin></FontAwesomeIcon>
      </div>
    </React.Fragment>
  );
};
export default LoadingComponent;
