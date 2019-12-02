import React from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
  import LoginScreen from './screens/login/LoginScreen'
  import RegistrationScreen from './screens/Registration/RegistrationScreen'



function Router() {
  return (
    <Switch>
        <Route exact path="/login">
            <LoginScreen />
        </Route>
        <Route exact path="/registration">
            <RegistrationScreen />
        </Route>

  </Switch>
  );
}

export default Router;