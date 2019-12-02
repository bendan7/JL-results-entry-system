import React from 'react';
import './App.css'
import Header from './components/header'
import LoginScreen from './screens/login/LoginScreen'
import RegistrationScreen from './screens/Registration/RegistrationScreen'



function App() {
  return (
    <div className="App">
      <Header/>
      <RegistrationScreen/> 
    </div>
  );
}

export default App;
