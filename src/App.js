import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Shared/Sidebar";
import Content from "./Shared/Content";
const App = () => {
  return (
    <Fragment>
      <div className="App">
        <Router>
          <Sidebar />
          <Content />
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
