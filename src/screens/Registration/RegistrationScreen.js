import React from 'react';
import {Link,} from "react-router-dom";
import './RegistrationScreen.css'


class RegistrationScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      msg: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input_validation = this.input_validation.bind(this);
  }

  handleChange(event) {
    // this func update the state within the user input
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.input_validation()
    console.log(this.state)
    if (true){
      //this.setState({msg:"שם משתמש או סיסמא אינם נכונים"})
    }
    // move to dashboard
    return "false"
  }

  input_validation(){
    const vali_msg = []
    
    if (this.state.first_name === undefined){
      vali_msg.push("חסר שם פרטי")
    }
    if (this.state.last_name === undefined){
      vali_msg.push("חסר שם משפחה")
    }
    if (this.state.email === undefined){
      vali_msg.push("חסר איימיל")
    }
    if (this.state.password === undefined){
      vali_msg.push("חסר סיסמא")
    }
    if (this.state.password !== this.state.password_conf ){
      vali_msg.push("סיסמאות לא תואמות")
    }
    
    this.setState({msg:vali_msg})
  }

  

  render(){
    return (  
   <div className="d-flex justify-content-center p-2 p-sm-3"  > 
        <form  style={{maxWidth:"500px",width:"100%"}}>
            <h2>רישום</h2>
            <Link to="/login" style={{fontSize:"0.7em", marginTop:"10vh", color:"white"}}>משתמש קיים? להתחברות</Link>
            <br/>
            <br/>
            <div className="form-group" >
                <input type="text" name="reg_code" className="form-control" onChange={this.handleChange} placeholder="קוד רישום" />
            </div>
            <div className="form-group" >
                <input type="text" name="first_name" className="form-control" onChange={this.handleChange} placeholder="שם פרטי" />
            </div>
            <div className="form-group" >
                <input type="text" name="last_name" className="form-control" onChange={this.handleChange} placeholder="שם משפחה" />
            </div>
            <div className="form-group" >
                <input type="email" name="email" className="form-control" onChange={this.handleChange} placeholder="איימיל" />
            </div>
            <div className="form-group">
                <input type="password" name="password" className="form-control" onChange={this.handleChange} placeholder="סיסמא" />
            </div>
            <div className="form-group">
                <input type="password" name="password_conf" className="form-control" onChange={this.handleChange} placeholder="אימות סיסמא" />
            </div>
            <div style={{marginBottom:"10px"}}>
              {this.state.msg ? this.state.msg.map((msg)=>{return <li >{msg}</li>}) :  null}
            </div>
            <input type="submit" value="רשום משתמש" className="btn btn-lg btn-outline-light" onClick={this.handleSubmit}/>   
        </form>     
      </div>
    );
  }
  }
  export default RegistrationScreen;