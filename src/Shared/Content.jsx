import React from "react";
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Footer";

import Home from "../Pages/Home";
import LoadingComponent from "./LoadingComponent";
const Forms = React.lazy(() => import("../Pages/Forms"));
const CreateForm = React.lazy(() => import("../Pages/CreateForm"));
const FormTemplates = React.lazy(() => import("../Pages/FormTemplates"));
const CreatedForms = React.lazy(() => import("../Pages/CreatedForms"));

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
            <Route
              path="/forms/create/:title"
              exact
              render={(props) => <CreatedForms {...props} />}
            ></Route>
            <Route path="/templates" exact>
              <FormTemplates />
            </Route>
          </React.Suspense>
        </Switch>

        <Footer />
      </main>
    </Fragment>
  );
};

export default Content;
