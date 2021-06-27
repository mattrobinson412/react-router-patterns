import React from 'react';

import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

import Dogs from "./Dogs";
import FilterDogs from "./FilterDogs";

// Component for Routes in Dog app. //
const Routes = ({dogs}) => {
    return (
        <Switch>
            <Route exact path="/dogs/:name">
                <FilterDogs dogs={dogs} />
            </Route>
            <Route exact path="/dogs">
                <Dogs dogs={dogs} />
            </Route>
            <Redirect to="/dogs" />
        </Switch>
      );
}

export default Routes;
