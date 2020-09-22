import React from "react";
import { Switch, Route } from "react-router-dom";

import AppLayout from "../layout/AppLayout";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

import * as routes from "../constants/routes.js";
const Routes = () => {
  return (
    <Switch>
      <Route exact path={routes.LOGIN} component={Login} />
      <Route>
        <AppLayout>
          <Switch>
            <Route exact path={routes.HOME} component={Home} />
            <Route exact path={routes.PROFILE} component={Profile} />
          </Switch>
        </AppLayout>
      </Route>
    </Switch>
  );
};

export default Routes;
