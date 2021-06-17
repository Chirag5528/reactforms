import React from "react";
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Footer";

import Home from "../Pages/Home";
import LoadingComponent from "./LoadingComponent";
const Forms = React.lazy(() => import("../Pages/Forms"));
const CreateForm = React.lazy(() => import("../Pages/CreateForm"));

const Content = () => {
  return (
    <Fragment>
      <main className="content">
        <Switch>
          <React.Suspense fallback={<LoadingComponent />}>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/forms" exact>
              <Forms />
            </Route>
            <Route
              path="/forms/:title"
              exact
              render={(props) => <CreateForm {...props} />}
            ></Route>
          </React.Suspense>
        </Switch>

        <Footer />
      </main>
    </Fragment>
  );
};

export default Content;
