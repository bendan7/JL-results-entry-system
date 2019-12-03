import React from 'react';
import './App.css'
import Header from './components/header'
import LoginScreen from './screens/login/LoginScreen'
import RegistrationScreen from './screens/Registration/RegistrationScreen'
import Router from './Router'



function App() {
  return (
    <div className="App" dir="RTL">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
