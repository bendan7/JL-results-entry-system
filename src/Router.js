import React from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
  import LoginScreen from './screens/login/LoginScreen'
  import RegistrationScreen from './screens/Registration/RegistrationScreen'
  import Dashboard from './screens/Dashboard/Dashboard'



function Router() {
  return (
    <Switch>
        <Route exact path="/">
            <LoginScreen />
        </Route>
        <Route exact path="/registration">
            <RegistrationScreen />
        </Route>
        <Route exact path="/dashboard">
            <Dashboard />
        </Route>
  </Switch>
  );
}

export default Router;