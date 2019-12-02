import React from 'react';
import './loginScreen.css';


class LoginScreen extends React.Component {

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
          <form  style={{maxWidth:"500px",width:"100%"}}>
              <h2>התחברות</h2>
              <div className="form-group" >
                  <input type="email" className="form-control" onChange={this.handleChange} placeholder="Email" />
              </div>
              <div className="form-group">
                  <input type="password" className="form-control" onChange={this.handleChange} placeholder="Password" />
              </div>
              <div>
                <div style={{fontSize:"0.6em", margin:"10px", }}>{this.state.msg}</div>
              </div>
              <input type="submit" value="כניסה" className="btn btn-lg btn-outline-light" onClick={this.handleSubmit}/>  
              <div style={{fontSize:"0.8em", marginTop:"10vh"}}>יצירת חשבון</div> 
          </form>

           
      </div>
    );
  }
}
export default LoginScreen;