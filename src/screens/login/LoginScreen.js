import React from 'react';
import './loginScreen.css';


class LoginScreen extends React.Component {

  
  render(){
    return (  
      <div className="d-flex justify-content-center p-2 p-sm-5"  > 
          <div  style={{maxWidth:"500px",width:"100%"}}>
              <h2>התחברות</h2>
              <div className="form-group" >
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-lg btn-outline-light" onClick={()=>console.log("click")}>כניסה</button>
              <div style={{fontSize:"0.6em", marginTop:"10px"}}>יצירת חשבון</div>
          </div>   
      </div>
    );
  }
}
export default LoginScreen;