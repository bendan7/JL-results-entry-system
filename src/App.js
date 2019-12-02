import React from 'react';
import './App.css'
import Header from './components/header'
import LoginScreen from './screens/login/LoginScreen'
import RegistrationScreen from './screens/Registration/RegistrationScreen'
import Router from './Router'



function App() {
  return (
    <div className="App" dir="RTL">
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
