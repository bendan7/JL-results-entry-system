import React from 'react';

class RegistrationScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      msg: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this func update the state within the user input
    this.setState({[event.target.type]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (true){
      this.setState({msg:"שם משתמש או סיסמא אינם נכונים"})
    }
    // move to dashboard
    return "false"
  }

  

  render(){
    return (  
      <div className="d-flex justify-content-center p-2 p-sm-5"  > 
        <h2>רישום</h2>    
      </div>
    );
  }
  }
  export default RegistrationScreen;