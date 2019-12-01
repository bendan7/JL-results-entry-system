import React from 'react';
import './App.css'
import Header from './components/header'
import LoginScreen from './screens/login/LoginScreen'



function App() {
  return (
    <div className="App">
      <Header/>
      <LoginScreen/> 
    </div>
  );
}

export default App;
